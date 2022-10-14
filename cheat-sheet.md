# Terms

## Functions

### Defining

```js
function myFunction() {}
```

### Calling/Invoking

```js
function myFunction() {}
myFunction();
```

### Naming
-  Should be a **VERB**
    - Examples: `find`, `display`, `print`, `load`, `initialize`, `calculate`, `configure`
- **VERB** *may* be followed by a **NOUN**
  - Examples: `findCustomer`, `displayCourse`, `printStudent`, `loadProducts`, `initializeDropdown`, `calculateInterest`, `configureApplication`

### Function with Parameter(s)

```
function myFunction(param1, param2,...){

}
```

### Invoking Function with Parameter(s)

```
function myFunction(parameter1, parameter2,...){

}

let argument1 = "a";
let argument2 = "b"
myFunction(argument1, argument2)
```

### Anonymous Function

```js
function (){

}
```

## Objects

### Defining

```js
let person = { first: "Kanye", last: "West", age: 45 };
```

### Naming

Should be a noun/thing, it's one instance of a thing.

```
 let number, course, item, movie, candy, product, animal
```

### Accessing Properties (Dot Notation)

```js
let person = { first: "Kanye", last: "West", age: 45 };
console.log(person.first);
```

## Arrays

### Define

```js
let numbers = [1, 2, 3, 4, 5];
```

### Naming

- Should be a **plural** **NOUN** it's a `collection/list` of `nouns/things`.


```js
 let numbers, courses, items, movies, candies, products, animals
```

- May end with the suffix `list` or `collection`

### Access item in Array

- use Subscript, Index into the Array

```js
let numbers = [1, 2, 3, 4, 5];
console.log([0]); //1;
```

## Loops

```js
//initialize counter
//check counter using a conditional
// increment (change) counter
for (let loop = 1; loop < 8; loop++) {
  console.log("I love loops");
}
```

## VS Code Shortcuts

### Copy
- `Ctrl+C` on Windows
- `CMD+C` on MacOS

>OR

### Cut (Copies to clipboard and removes)
- `Ctrl+X` on Windows
- `CMD+X` on MacOS

> THEN

### Paste
- `Ctrl+V` on Windows
- `CMD+V` on MacOS


### Commenting

- `Ctrl+/` on Windows
- `CMD+/` on MacOS

- Repeat to uncomment

```js
// let numbers = [1, 2, 3, 4, 5];
```

## Comparison Operators

### Summary

```js
let a = 1; // one equals is not comparing, it is assigning
if(a == 1){ //two equals is comparing the values on the left and right
// returns true if they are equal
};
if(a !== 1){ //two equals with a not operator (!) compares the values on the left and right
//returns true if they are not equal

};

```
