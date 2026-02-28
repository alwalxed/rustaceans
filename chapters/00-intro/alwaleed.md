---
theme: default
title: "Intro to Rust (Study Group)"
presenter: alwaleed
transition: slide-left
mdc: true
highlighter: shiki
---

## Intro to Rust

# A Study Group Kickoff

_"Technology from the past, come to save the future from itself"_, Graydon Hoare

---

# Agenda

<v-clicks>

- A bit about me
- What is Rust, and why does it matter?
- Why I personally chose to learn Rust
- What I expect from this study group

</v-clicks>

---

# What is Rust?

Rust is a **systems programming language**, meaning it's used for software that
runs close to the hardware: operating systems, browsers, game engines, network
tools.

> Unlike Python or JavaScript, which manage a lot for you behind the scenes,
> Rust gives you **direct control over memory and CPU usage**, without the usual
> risk of crashes.

<v-clicks>

It makes three core promises:

- 🛡 **Safety**, no null pointer crashes, no use-after-free bugs, no data races.
  The compiler catches these _before_ your program ever runs.
- ⚡ **Speed**, performance on par with C and C++. No hidden runtime slowing
  things down.
- 🔀 **Concurrency**, running multiple tasks at the same time (e.g. a server
  handling 10,000 requests simultaneously). Rust makes this safe _by design_, if
  it compiles, it's free of data races.

</v-clicks>

---

# Why Rust Stands Out

<v-clicks>

- **Zero-cost abstractions**, the language gives you shortcuts to write clean
  code, but they carry no performance penalty. You don't pay for what you don't
  use.
- **Memory safety without a garbage collector**, languages like Java and Python
  use a GC that periodically pauses your program to clean up memory. Rust has no
  GC. Instead, _ownership rules_ enforce cleanup at compile time, no pauses, no
  surprises.
- **The compiler is your teammate**, most compilers just say "error on line 12."
  Rust's compiler tells you _why_ it failed and _how_ to fix it. Even veterans
  find it helpful.
- **Expressive type system**, the type system enforces rules about your data.
  Rust's is powerful enough that entire categories of bugs (null errors, integer
  overflows) become _compile-time_ errors instead of _runtime_ surprises.

</v-clicks>

---

# Origin Story

<v-click>

| Year      | Event / Milestone                                                                                                                        |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 2006      | Graydon Hoare, 29, frustrated by a broken elevator, starts Rust as a side project (~38k lines in OCaml; had a GC; named after a fungus). |
| 2009      | Mozilla officially sponsors Rust; team grows, GC removed, rewritten in Rust itself.                                                      |
| 2012–2014 | PhD researchers join; Cargo & crates.io launch; RFC process begins.                                                                      |
| 2015      | Rust 1.0 stable release; 6-week release train begins.                                                                                    |

<small>RFC = Request for Comments; proposals are posted publicly for review to
maintain stability.</small>

</v-click>

---

# Who Uses Rust in Production?

_"In production" means real software that real users depend on, not
experiments._

<v-clicks>

- **Microsoft**, Windows components, Azure infrastructure
- **Amazon**, Firecracker (the virtualization tech powering AWS Lambda),
  Bottlerocket
- **Google**, Android, Fuchsia OS, core infrastructure
- **Apple, Meta, Cloudflare, Figma, ByteDance, X/Twitter**, core backend systems
- **Linux Kernel**, drivers and modules; first new language accepted into the
  kernel in 30+ years
- **US Government**, multiple agencies recommending or mandating memory-safe
  languages
- **Solana**, high-performance blockchain (speed and safety both matter here)
- And hundreds more →
  [github.com/omarabid/rust-companies](https://github.com/omarabid/rust-companies)

</v-clicks>

---

# Why I'm Learning Rust

<v-clicks>

- I want to **deeply understand** how computers actually work at a low level,
  memory, the stack, the heap, all of it.
- I've touched C, Go, JavaScript, Python, and PHP. None of them felt as
  **intellectually exciting** as Rust.
- C is powerful, but I don't want to babysit memory manually. I want **a
  compiler that has my back**, one that catches mistakes instead of letting them
  silently corrupt memory.
- I believe Rust has a **strong future**, and I'd rather learn it early than
  spend years catching up later.

</v-clicks>

---

# What I Expect From This Group

<v-clicks>

- We go through **all 21 chapters**, no skipping. Each chapter builds on the
  last.
- Everyone shows up **serious about learning**, this isn't a casual read-along.
- Everyone **genuinely enjoys** the process. Rust can feel hard at first. That
  friction means you're learning. Lean into it.
- No question is a dumb question, **ask everything**. If you're confused,
  someone else is too.

</v-clicks>

---

# Study Plan

We'll follow the **official Rust Book**
([doc.rust-lang.org/book](https://doc.rust-lang.org/book)), freely available
online, written by the Rust team itself.

Each session:

- One of us will present, **zero passivity**, everyone participates.

Structure:

- **Chapters 1–3**: covered together in one session (short and closely related,
  installation, basic syntax, your first programs).
- **Chapter 4 onward**: one chapter per session.
- **21 chapters total**. The plan can evolve if we find a better approach.

---

# Links

- [The Rust Book (official, free)](https://doc.rust-lang.org/book/)
- [The History of Rust, YouTube talk](https://www.youtube.com/watch?v=79PSagCD_AY)
- [Graydon's Original Intro Talk](https://venge.net/graydon/talks/intro-talk-2.pdf)
- [crates.io, Rust package registry](https://crates.io)
- [Companies using Rust](https://github.com/omarabid/rust-companies)
- [Rust Friends, production users list](https://prev.rust-lang.org/en-US/friends.html)
