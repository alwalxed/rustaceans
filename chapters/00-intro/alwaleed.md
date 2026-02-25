---
theme: default
title: "Intro to Rust (Study Group)"
presenter: alwaleed
transition: slide-left
mdc: true
---

## Intro to Rust

# A Study Group Kickoff

"Technology from the past, come to save the future from itself", Graydon Hoare

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

A systems programming language built around three core promises:

<v-clicks>

- **Safety**, no null pointers, no data races, no use-after-free
- **Speed**, performance on par with C and C++
- **Concurrency**, fearless, by design

</v-clicks>

---

# Why Rust Stands Out

<v-clicks>

- **Zero-cost abstractions**, you don't pay for what you don't use
- **Memory safety without a garbage collector**, ownership and borrowing handle
  it at compile time
- **The compiler is your teammate**, it catches bugs before they ever run
- **Clear, actionable error messages**, it doesn't just fail, it tells you how
  to fix it
- **Expressive type system**, entire classes of runtime errors simply can't
  exist
- **World-class tooling**, Cargo, rustfmt, and Clippy out of the box
- **Thriving ecosystem**, and a community that actually welcomes beginners

</v-clicks>

---

# Origin Story

<v-clicks>

- **2006**, Graydon Hoare, 29, a Mozilla engineer, starts Rust as a personal
  side project
- **2009**, Mozilla officially sponsors it
- **2015**, Rust 1.0 ships after nearly a decade of research and iteration

</v-clicks>

| Era         | Years     | Milestone                                                   |
| ----------- | --------- | ----------------------------------------------------------- |
| Personal    | 2006–2009 | ~38k lines of OCaml; had a GC                               |
| Mozilla     | 2009–2012 | Team grows; GC removed; rewritten in Rust                   |
| Type System | 2012–2014 | PhDs join; Cargo & crates.io launch; RFC process introduced |
| Release     | 2015–2016 | 1.0 stable; 6-week release train begins                     |
| Production  | 2016–now  | Most loved language on Stack Overflow every year since 2016 |

---

# Who Uses Rust in Production?

<v-clicks>

- **Microsoft**, Windows components, Azure
- **Amazon**, Firecracker, Bottlerocket, Lambda
- **Google**, Android, Fuchsia, core infrastructure
- **Apple, Meta, Cloudflare, Figma, Bytedance, X/Twitter**
- **Linux Kernel**, drivers and modules, growing rapidly
- **US Government**, multiple agencies
- **Solana**, high-performance blockchain
- And hundreds more →
  [github.com/omarabid/rust-companies](https://github.com/omarabid/rust-companies)

</v-clicks>

---

# Fun Facts Worth Sharing

<v-clicks>

- **Rust is named after a fungus**, Graydon's own words: "over-engineered for
  survival"
- **A broken elevator sparked it all**, Hoare lived on the 21st floor of his
  Vancouver apartment building; a software crash in the elevator was the last
  straw
- **Every 6 weeks, a new release**, before shipping, they compile ~5,000 crates
  to verify backward compatibility. No half-cooked features rushed out the door
  to meet a yearly deadline.

</v-clicks>

---

# Why I'm Learning Rust

<v-clicks>

- I want to **deeply understand** how computers actually work at a low level
- I've touched C, Go, JavaScript, Python, and PHP, none of them felt as
  **intellectually exciting** as Rust
- C is powerful, but I don't want to babysit memory manually, I want **a
  compiler that has my back**
- I believe Rust has a **strong future**, and I'd rather learn it early than
  catch up later

</v-clicks>

---

# What I Expect From This Group

<v-clicks>

- We go through **all the chapters**, no skipping
- Everyone shows up **serious about learning**
- Everyone **genuinely enjoys** the process
- No question is a dumb question, **ask everything**

</v-clicks>

---

# Study Plan

We’ll follow the **official Rust book**, chapter by chapter.

Each session:

- Each of us will present
- Zero passivity, everyone participates.

Structure:

- **Chapters 1–3**: covered together (short and closely related).
- **Chapter 4 onward**: one chapter per session.
- The book has **21 chapters**.
- The plan can evolve if we find a better approach.

---

# Links

- [The History of Rust](https://www.youtube.com/watch?v=79PSagCD_AY)
- [Graydon's Intro Talk](https://venge.net/graydon/talks/intro-talk-2.pdf)
- [Rust Companies](https://github.com/omarabid/rust-companies)
- [crates.io](https://crates.io)
- [Rust Lang Book](https://doc.rust-lang.org/book/)
- [Rust Friends](https://prev.rust-lang.org/en-US/friends.html)

---
