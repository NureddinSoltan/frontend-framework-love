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
# 7. Functions

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
-----
# 8. Objects
Example
```js
    const product = {
      name: 'socks',
      price: 1090
    };
    console.log(product);
    console.log(product.name);
```

- `name` is called a **property**.
- `name: 'socks'` is called a **property-value pair**.

We access a value with the name of the object, a dot, and then the property we want to access. This syntax is called **dot notation**.

## Why do we use objects?

- They make our code more organized.
- They let us group multiple values together.
- They let us use multiple values together.

## Bracket Notation vs Dot Notation

We can also use **bracket notation** to access a property with a string:

```js
console.log(product['name']);
```

### When do we use each one?

- **Bracket notation** lets us use properties that don't work with dot notation.
- For example, if we want to access the `delivery-time` property, dot notation won't work, because JS reads the `-` as a minus sign. So we have to use bracket notation.

```js
const product2 = {
  name: 'shirt',
  ['delivery-time']: '1 day', // both work
  'delivery-time': '1 day'    // both work
};

console.log(product2.delivery-time);    // Error
console.log(product2['delivery-time']); // Works
```

- Between the brackets we don't have to use just a string. We can use a variable, a calculation, or anything that results in a value.

### Which one should we use?

- Use **dot notation** by default.
- For properties that don't work with dot notation, use **bracket notation**.

## We can save any type of value in the object.
- We can add an object inside the object `Nested Objects`
- We can define a function inside the object. This works becasue function is just another type of value in js. 
example
```js
    const product2 = {
      name: 'shirt',
      'delivery-time': '1 day',
      rating: {
        starts: 4.5,
        count: 87,
      },
      fun : function function1() {
        console.log("function inside object")
      }
    };

    console.log(product2.rating.count);
    product2.fun();
```

> A function inside an object is called a method. like console.log is actualy a method. console is an object provioded by js and log is a function that saved inside the console. to confirm do a console.log(typeof console). Another example that Math.random = object + function = method. ## We can save any type of value in an object

- We can put an object inside an object (**nested objects**).
- We can define a function inside an object. This works because a function is just another type of value in JS.

```js
const product2 = {
  name: 'shirt',
  'delivery-time': '1 day',
  rating: {
    stars: 4.5,
    count: 87
  },
  fun: function function1() {
    console.log('function inside object');
  }
};

console.log(product2.rating.count);
product2.fun();
```

> A function inside an object is called a **method**. For example, `console.log` is actually a method: `console` is an object provided by JS, and `log` is a function saved inside `console`. To confirm, run `console.log(typeof console)`. Another example: `Math.random` = object + function = method.

## Built-in Objects
### JSON (JavaScript Object Notation)
- A syntax.
- Similar to a JavaScript object, but with fewer features (for example, it doesn't support functions inside an object).

**Why do we use JSON syntax instead of JS syntax?**
- A JS object only makes sense in JS. JSON syntax, on the other hand, can be understood by almost every programming language. JSON is more universal.

**We use JSON:**
- When we send data between computers.
- When we store data.

**Built-in JSON object:**
- Convert a JS object → JSON (produces a JSON string) with `JSON.stringify`.
- Convert JSON → a JS object with `JSON.parse`.
```js
const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));
```

### localStorage

- Saves values permanently.
- Variables are temporary: if we refresh or close the page, all the variables are deleted.
- To save a value inside localStorage, we use the method `.setItem('name', 'value')`. It takes two things: a name and a value.
- `localStorage` only supports strings.
```js
localStorage.setItem('score', JSON.stringify(score));
```

To get the value out of localStorage, we use `.getItem('name')`, which takes one string:
```js
localStorage.getItem('score');
```

To delete a value from localStorage, we use the method `.removeItem('name')`:
```js
localStorage.removeItem('score');
```

Since localStorage only supports strings, we need to convert our object into a string. So we use `JSON.stringify` to save it, and `JSON.parse` to convert it back into an object when we read it.

**Example (rock paper scissors):**
```js
// Read it
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// Save it
localStorage.setItem('score', JSON.stringify(score));

// Delete it
localStorage.removeItem('score');
```

### Side note: null vs undefined
`null` is one of the falsy values in JS. It's similar to the value `undefined`.

If an object is `null`, we can check it in an `if` condition using either `null` or the not (`!`) operator:

```text
score = null
!score          => true
score === null  => true

score = { wins: 0, losses: 0, ties: 0 }
!score          => false
score === null  => false
```

**What's the difference between null and undefined?**

- We use `null` when we intentionally want something to be empty.
- In most cases, `null` and `undefined` work the same way.
- `undefined` usually means "JS hasn't set this," while `null` means "I, the developer, am setting this to nothing on purpose."


## More Details About Objects

### Auto-Boxing
Objects can have properties and methods. But other values can have properties and methods too. For example, a string also has properties and methods:
```js
console.log('hello'.length);
console.log('hello'.toUpperCase());
```

**How can a string, which is not an object, have a property and a method?**

JS has a special feature called **auto-boxing**. It automatically wraps the string in a special object first, and this object has the property and method, like `length` and `toUpperCase`.
```text
-- -- -- --
| 'hello' |
-- -- -- --
Special object
```

### Objects Are References
When we create an object, the value is created in some location in the computer's memory. So when we set one object equal to another, we copy the **reference**, which points to the same location as the first one.

It's like a shortcut: the app shortcut on your desktop is a reference to the main file on the computer.
```js
const object1 = {
  message: 'hello'
};

const object2 = object1;
```

It's not a copy of the object, it just copies the reference. This makes the language really efficient: if we had a really big object, it would be slow to copy the entire object over and over again. Instead, JS copies the reference, which is much faster. This is called **copy by reference**.

#### Some interesting behaviors of references
We can change a property of the value inside the object:
```js
object1.message = 'Good job';
```

We can't compare objects directly:
```js
const object3 = {
  message: 'Good job'
};

console.log(object3 === object1);
```

This gives us `false`. That's because objects are references: `object3` contains a reference and `object1` contains a reference, so we're comparing references, not the values inside. If we want to compare the values inside, we have to do that manually by checking each property.
## Shortcuts for Objects
```js
const object4 = {
  message: 'Good job',
  price: 799
};
```

### Destructuring

If we want to get the `message` property out of an object and save it to a variable, we'd normally do this. But there's a shortcut called **destructuring**:

```js
const message = object4.message;     // normal way
const { message } = object4;         // destructuring
const { message, price } = object4;  // destructuring multiple properties

console.log(message);
console.log(price);
```
This takes the `message` property out of `object4` and saves it into a variable called `message`.

**Destructuring** is an easier way to take properties out of an object.

### Shorthand Property

If the property name and the variable name are the same, we can just type it out once:

```js
const object5 = {
  message: message, // normal way
  message           // shorthand property
};
```

### Shorthand Method

```js
const object5 = {
  method: function function1() { // normal way
    console.log('method');
  },
  method() {                     // shorthand method
    console.log('method');
  }
};

console.log(object5);
object5.method();
```

-----
# 9. DOM (Document Object Model)

The DOM is a built-in object. It combines JS and HTML together and gives JS full control of the webpage.

## Some methods

### document.body

Lets us get the body element and put it inside our JS.

```js
console.log(document.body);
console.log(typeof document.body);

console.log(document.body.innerHTML);
document.body.innerHTML = '<button> Good job! </button>';
```

### document.querySelector()

Lets us get any element from the page and put it inside JS.

Every HTML element has a property called `.innerHTML`.

```html
<body>
  <button>hello</button>
  <button class="js-button">Second Button</button>

  <script>
    console.log(document.querySelector('button').innerHTML);
    document.querySelector('button')
      .innerHTML = 'Changed';

    const buttonElement = document.querySelector('.js-button');
    console.log(buttonElement);
  </script>
</body>
```

### innerHTML

Modifies the HTML inside the element.

## innerText vs innerHTML

One of the differences is:

- `innerText` gives us just the text, without extra spaces.
- `innerHTML` gives us the text with the spaces.

```html
<p>YouTube Subscribe Button</p>
<button onclick="
  const buttonElement = document.querySelector('.js-subscribe-button');

  console.log('innerHTML:', JSON.stringify(buttonElement.innerHTML));
  console.log('innerText:', JSON.stringify(buttonElement.innerText));

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
  } else {
    buttonElement.innerHTML = 'Subscribe';
  }
" class="js-subscribe-button">
  Subscribe
</button>
```

### onkeydown = '...'

`onkeydown` is an HTML attribute that runs a JS function the exact moment a user presses down any key on their keyboard.

## Notes

- `click`, `keydown` => **events**
- `onclick`, `onkeydown` => **event listeners**

- Every event listener gets an **event object**.
- There are more event listeners available in JS in general.

- Whenever we get a value from the DOM, the value will be a **string**.
- To convert a string into a number, use the `Number` function. To convert a number into a string, use the `String` function.

```js
Number('25');
String(25);
```

> If a string only contains a number, and we use `-`, `*`, or `/`, it will be converted into a number. But `+` is different, because it's also used to join strings together.

```js
console.log('25' - 5); // 20     (Number)
console.log('25' + 5); // '255'  (String)
```

## Window object

`window` is a built-in object that represents the browser. We don't have to type `window.` because JS does that automatically, but it's nice to know how things work behind the scenes.

```js
window.document;
window.console.log('window');
window.alert('er');
```

----
