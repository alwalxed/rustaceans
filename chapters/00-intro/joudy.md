---
theme: default
title: "Intro"
presenter: Joudi
---

# Intro

**Presenter:** Joudi  
**Rust Book:** https://doc.rust-lang.org/book/

---

## who is this cool dude ? 
- just a dude who is "ملقوف"
- have a background in Data science and Data engineering
- currently super interested in blockchain applications and super eager to explore the usages of them
- currently in a SWE/Data Engineering role role where i develop fintech solutions and maintain some data pipelines 

<!--
  Brief summary of this chapter's core topics.
-->

---
# why am i interested in it:
- Machine learning and data pipelines
- blockchain networks developing
- Backend engineering and infrastructure

## Key Concepts

- **Memory safety without garbage collection**  
- **Ownership and borrowing model**  
- **High performance close to C/C++**  
- **Modern tooling: Cargo, Rustfmt, and Clippy**  
- **Strong type system with helpful compiler errors**  

---

## 1. Memory Safety Without Garbage Collection

In C, you manage memory manually — and mistakes compile silently.
```c
// C — use after free: compiles fine, crashes or corrupts at runtime
#include <stdlib.h>
#include <stdio.h>

int main() {
    int *x = malloc(sizeof(int));
    *x = 42;
    free(x);
    printf("%d\n", *x); // undefined behavior — x is freed!
    return 0;
}
```

In Rust, the compiler catches this at compile time — the program never runs with this bug.
```rust
// Rust — use after free: caught at compile time
fn main() {
    let x = Box::new(42);
    drop(x); // explicitly drop x
    println!("{}", x); // ERROR: borrow of moved value: `x`
}
```

> Rust gives you the same manual control as C, but the compiler enforces safety.  
> No garbage collector needed — memory is freed automatically when ownership ends.

---

## 2. Ownership and Borrowing Model

In Python, multiple variables can reference the same object freely — this is fine for a GC language but hides ownership.
```python
# Python — two variables point to the same list
a = [1, 2, 3]
b = a        # b is just another reference to the same list
b.append(4)
print(a)     # [1, 2, 3, 4] — a was mutated through b, possibly unintentionally
```

In Rust, ownership is explicit — you either move or borrow.
```rust
// Rust — ownership and borrowing
fn main() {
    let a = vec![1, 2, 3];
    let b = a; // ownership moved to b

    println!("{:?}", a); // ERROR: value borrowed here after move

    // To share without moving, use a borrow:
    let a = vec![1, 2, 3];
    let b = &a; // b borrows a — read-only reference
    println!("{:?}", b); // fine
    println!("{:?}", a); // also fine — a still owns the data
}
```

> Ownership rules make data flow explicit and prevent accidental mutation or sharing.

---

## 3. High Performance Close to C/C++

Python is slow for tight loops due to interpreter overhead and dynamic typing.
```python
# Python — summing 100 million numbers
total = 0
for i in range(100_000_000):
    total += i
print(total)
# Takes several seconds
```

Rust compiles to native machine code with zero overhead — comparable to C.
```rust
// Rust — summing 100 million numbers
fn main() {
    let total: u64 = (0u64..100_000_000).sum();
    println!("{}", total);
    // Runs in milliseconds
}
```
```c
// C — equivalent, also runs in milliseconds
#include <stdio.h>

int main() {
    unsigned long long total = 0;
    for (unsigned long long i = 0; i < 100000000; i++) {
        total += i;
    }
    printf("%llu\n", total);
    return 0;
}
```

> Rust matches C in raw performance, with no garbage collector pauses and no interpreter.  
> The difference from C is that Rust achieves this *without* sacrificing safety.

---

## 4. Modern Tooling: Cargo, Rustfmt, and Clippy

In C/C++, there is no standard build system or package manager — you stitch together Make, CMake, vcpkg, conan, etc.
```bash
# C++ — manual dependency management (no standard way)
sudo apt install libfmt-dev
```

In Rust, Cargo handles everything in one place.
```toml
# Cargo.toml — declare dependencies like package.json or pyproject.toml
[dependencies]
serde = { version = "1", features = ["derive"] }
tokio = { version = "1", features = ["full"] }
```
```bash
# One command to build, run, test, lint, and format
cargo build
cargo run
cargo fmt      # Rustfmt: auto-formats your code
```
```rust
// Clippy example — it will warn you about this:
let v: Vec<i32> = vec![1, 2, 3];
if v.len() == 0 {  // Clippy: use `v.is_empty()` instead
    println!("empty");
}
```

> Cargo eliminates the "dependency hell" common in C/C++ projects.  
> Rustfmt and Clippy enforce quality automatically — no debates about style.

---

## 5. Strong Type System with Helpful Compiler Errors

In C, implicit type conversions happen silently and can cause bugs.
```c
// C — silent implicit conversion
#include <stdio.h>

int main() {
    int x = -1;
    unsigned int y = 1;
    if (x < y) {          // x is implicitly converted to unsigned!
        printf("x is less\n");
    } else {
        printf("x is NOT less\n"); // this prints — -1 becomes a huge number
    }
    return 0;
}
```

In Python, type errors only surface at runtime.
```python
# Python — type error only at runtime
def add(a: int, b: int) -> int:
    return a + b

result = add("hello", 5)  # no error until you actually run this line
```

In Rust, type errors are caught at compile time with clear messages.
```rust
// Rust — caught at compile time
fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    let result = add("hello", 5);
    // ERROR: expected `i32`, found `&str`
    // the compiler tells you exactly where and why

    // Signed/unsigned comparison is also flagged:
    let x: i32 = -1;
    let y: u32 = 1;
    // let z = x + y; // ERROR: cannot add `u32` to `i32`
    let z = x + y as i32; // explicit cast required
    println!("{}", z);
}
```

> Rust's compiler acts as a first line of defense.  
> Bugs that would only appear in production in C or Python are caught before the binary is even built.
