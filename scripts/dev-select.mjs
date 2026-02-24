#!/usr/bin/env node

import { select, checkbox } from "@inquirer/prompts";
import { spawn } from "child_process";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// ── Constants ────────────────────────────────────────────────────────────────

const PRESENTERS = ["alwaleed", "joudy", "mohammed", "lina", "waleed"];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CHAPTERS_DIR = path.resolve(__dirname, "..", "chapters");

// ── Chapter discovery ────────────────────────────────────────────────────────

async function getChapterChoices() {
  let entries;
  try {
    entries = await fs.readdir(CHAPTERS_DIR, { withFileTypes: true });
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error(`Chapters directory not found: ${CHAPTERS_DIR}`);
    }
    throw new Error(`Failed to read chapters directory: ${err.message}`);
  }

  const choices = entries
    .filter((entry) => !entry.name.startsWith(".") && entry.isDirectory())
    .map((entry) => ({ value: entry.name }))
    .sort((a, b) => a.value.localeCompare(b.value));

  if (choices.length === 0) {
    throw new Error(`No chapters found in ${CHAPTERS_DIR}.`);
  }

  return choices;
}

// ── Prompts ──────────────────────────────────────────────────────────────────

async function promptForSelection() {
  const chapterChoices = await getChapterChoices();

  const presenter = await select({
    message: "Select presenter",
    choices: PRESENTERS.map((p) => ({ value: p })),
    loop: false,
  });

  const chapters = await checkbox({
    message: "Select chapter(s)",
    choices: chapterChoices,
    loop: false,
    required: true,
    validate: (selected) =>
      selected.length > 0 || "Please select at least one chapter.",
  });

  return { presenter, chapters };
}

// ── Process helpers ──────────────────────────────────────────────────────────

async function resolveEntryPath(chapter, presenter) {
  const absolute = path.join(CHAPTERS_DIR, chapter, `${presenter}.md`);

  try {
    await fs.access(absolute);
  } catch {
    throw new Error(
      `No slides found for presenter "${presenter}" in chapter "${chapter}". Expected: ${absolute}`,
    );
  }

  return path.relative(process.cwd(), absolute);
}

function registerSignalForwarders(child) {
  const forward = (signal) => {
    if (!child.killed) child.kill(signal);
  };
  const onSigint = () => forward("SIGINT");
  const onSigterm = () => forward("SIGTERM");

  process.once("SIGINT", onSigint);
  process.once("SIGTERM", onSigterm);

  return () => {
    process.off("SIGINT", onSigint);
    process.off("SIGTERM", onSigterm);
  };
}

async function runChapter({ presenter, chapter }) {
  const entry = await resolveEntryPath(chapter, presenter); // ← pass both

  console.log(`\n▶  Starting: ${chapter}  (presenter: ${presenter})\n`);

  return new Promise((resolve, reject) => {
    const child = spawn("pnpm", ["exec", "slidev", entry], {
      stdio: "inherit",
      env: { ...process.env, PRESENTER: presenter, CHAPTER: chapter },
    });

    child.on("error", (err) => {
      cleanup();
      reject(
        new Error(`Failed to start Slidev for "${chapter}": ${err.message}`),
      );
    });

    const cleanup = registerSignalForwarders(child);

    child.on("exit", (code, signal) => {
      cleanup();
      if (signal) {
        reject(new Error(`"${chapter}" was killed by signal: ${signal}`));
      } else if (code !== 0) {
        reject(new Error(`"${chapter}" exited with code ${code}`));
      } else {
        resolve();
      }
    });
  });
}

// ── Entry point ──────────────────────────────────────────────────────────────

async function main() {
  const { presenter, chapters } = await promptForSelection();

  for (const chapter of chapters) {
    await runChapter({ presenter, chapter });
  }
}

main().catch((err) => {
  console.error(`\n✖  ${err instanceof Error ? err.message : String(err)}\n`);
  process.exit(1);
});
