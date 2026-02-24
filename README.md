# Rust Book Study Group (Rustaceans)

A collaborative presentation project for the Rust Book study group.
Each chapter has its own folder, and each presenter has their own slide file.

## Presenters
- **alwaleed**
- **joudy**
- **mohammed**
- **lina**
- **waleed**

## Project Structure

```
├── package.json
├── README.md
└── chapters/
    ├── 00-intro/
    │   ├── alwaleed.md
    │   ├── waleed.md
    │   ├── mohammed.md
    │   ├── joudy.md
    │   └── lina.md
    ├── 01-basics/
    ├── 04-understanding-ownership/
    ├── ...etc...
    └── 21-final-project-web-server/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
pnpm install
# or
bun install
# or
yarn install
```

### 2. Run your presentation

Each presenter runs their own file for their assigned chapter:

```bash
# Example: alwaleed presenting chapter 5 (Ownership)
npx slidev chapters/04-understanding-ownership/alwaleed.md
```

### 3. Export to PDF

```bash
npx slidev export chapters/04-understanding-ownership/alwaleed.md --output alwaleed-ownership.pdf
```

## Keyboard Shortcuts (in browser)

| Key | Action |
|-----|--------|
| `Space` / `→` | Next slide |
| `←` | Previous slide |
| `P` | Presenter mode (with notes) |
| `O` | Slide overview |
| `F` | Fullscreen |

## Workflow for Presenters

1. Navigate to your chapter folder: `chapters/NN-chapter-name/`
2. Open your `<yourname>.md` file
3. Fill in the slides, the template is already set up with frontmatter and a few starter slides
4. Run `npx slidev chapters/.../yourname.md` to preview

## Rust Book Reference

https://doc.rust-lang.org/book/
