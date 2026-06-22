# 5. Variables

Three ways to define variables: `let`, `const`, `var`

- **var**: old way (avoid). Function-scoped, can be redeclared.
- **let**: modern, for values that change. Block-scoped, can reassign but not redeclare.
```js
let count = 1;
count = 2;      // fine, reassigning
```
- **const**: for values that won't change. Block-scoped, cannot reassign.
```js
const name = "Sam";
name = "Koko";   // Error: Assignment to constant variable
```

**Rule of thumb:** use `const` by default, `let` when the value will change, avoid `var`.

## Declaring without let/const/var
- `username = "Koko"` → works, but BAD practice
- It silently creates a global variable
- Throws an error in strict mode (`"use strict";`)
- Always use `let` or `const` instead

## No keyword (no let/const/var)
- It does NOT become let or var, it's just an assignment
- JS auto-creates a global (acts like var, but it's not a real declaration)
- This is why it's a bug, not a feature

## In TypeScript
- Not allowed -> Error: "Cannot find name 'username'"
- Must declare with let or const first
- let / const / var all exist in TS (same as JS) + type annotations

## Naming conventions (JS & TS - same)
- **camelCase** -> variables & functions
  - `let userName`, `function getData()`
- **PascalCase** -> classes, types, interfaces, components
  - `class UserAccount`, `interface UserData` (TS)
- **UPPER_SNAKE_CASE** -> constants that never change
  - `const MAX_SIZE = 100`

----
# 6. Booleans

- Math.random() generates a number greater than or equal to zero and less than one: 0 <= number < 1
- var doesn't follow the rule of scope, that's why we don't use it, and just use let and const. Other reason is that var is function-scoped (not block-scoped) and gets hoisted and initialized as undefined, which leads to bugs. let/const are block-scoped and stay in the "temporal dead zone" until declared. Also var allows redeclaration of the same variable, which let/const don't.

## If statement

example:
```js
    if (age >= 16) {
      console.log("You can drive");
    } else if (age >= 14) {
      console.log("Almost there!")
    } else {
      console.log("You can't drive")
    }
```

## Comparison Operators (>, <, >=, <=, ==, ===, !=, !==)
- `==` does loose equality (it converts types before comparing), `===` does strict equality (no conversion, types must match). Example: `0 == ""` is `true`, but `0 === ""` is `false`.
- `!=` is loose not-equal (converts types), `!==` is strict not-equal (no conversion, types must match). They are the negated versions of `==` and `===`.

## Logical Operators (&&, ||, !)
- `&&` and operator
- `||` or operator
- `!` not operator

## Truthy and Falsy values
- false : The boolean keyword itself.
- 0 : The number zero.
- -0 : Negative zero.
- 0n : BigInt zero.
- "" : Empty string (`''`, `""`, and `` `` `` are all the same empty string).
- null : The intentional absence of any object value.
- undefined : A variable that has not been assigned a value.
- NaN : Not-a-Number.

## Shortcuts for if-statement (ternary, guard, default)
```js
    // Ternary operator
    const result = true? 'truthy':'falsy'
    console.log(result)

    // And operator
    false && console.log("hello")

    const message = 5 && 'hello';
    console.log(message)

    // Default operator (||)
    const currency = undefined || 'USD';
    console.log(currency);

    // Nullish coalescing (??)
    // || falls back on ANY falsy value; ?? only on null/undefined
    const a = 0 || 'USD';   // 'USD'  (0 is falsy)
    const b = 0 ?? 'USD';   // 0      (0 is not null/undefined)
    console.log(a, b);
```
---
# Functions

- Use **camelCase** for naming functions & parameters (best practice).
- A function creates its own scope: anything declared inside the curly brackets only exists inside them and can't be used outside.
- `return` vs `console.log`: `return` gives back a value you can store and reuse (`const tax = calculateTax(...)`); `console.log` only prints and returns `undefined`.
- Parameters vs arguments: `cost`/`taxPercent` (in the definition) are parameters; `2000`/`0.2` (in the call) are arguments.

Example:
```js
    function calculateTax(cost, taxPercent = 0.1) {
      console.log(cost * taxPercent)
    }

    calculateTax(2000, 0.2);
    calculateTax(5000);
```