# What is it?

## Type

What kind of thing is in the variable.

### Song

- R&B
- Jazz
- Hip-Hop/Rap
- Country
- Rock N Roll

### Variable

#### Primitive

- string

```js
let name = "Sophia";
```

- number (float, integer)

```js
let age = 28;
```

- date

```js
let date = new Date();
```

- boolean

```js
let isChecked = true;
let isOpen = false;
```
- null  or undefined
```js
let age; //undefined
let age = null;
```

#### Complex

- object

```js
let student = {
  first: "Gabriel",
  age: 22,
  birthDate: new Date(),
};
```

- array

```js
let names = ["Samuel", "Lianna", "Millena"];

let numbers = [1, 2, 3];

let mixed = [1, "Tarik", new Date(), "Gabriel"];

let students = [
  {
    first: "Gabriel",
    age: 22,
    birthDate: new Date(),
  },
  {
    first: "Ja'ir",
    age: 23,
    birthDate: new Date(),
  },
  {
    first: "Jarel",
    age: 18,
    birthDate: new Date(),
  },
];
```

### `HTMLElement`

### Content Elements

```html
<p>  </p>
<div>   </div>
```


```js
let element = document.getElementById("id"); //HTMLElement
element.innerText = "test";
```

### Form Elements

```html
<input type="textbox" value="">
<input type="number" value="">
<input type="date">
<input type="checkbox">
<input type="radio">
```


```js
let element = document.getElementById("id"); //HTMLElement
element.value = "test";
```


