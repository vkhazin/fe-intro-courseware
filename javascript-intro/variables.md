# Variables

* Most of the time a program needs to work with information or data whether storing, accessing, or modifying it
* With the most simple statement such as `1 + 1` the result of the addition needs to be stored somewhere
* To create a variable in modern JavaScript we use a `let` keyword e.g.:  `let message = 'Hello World';`
* Previous versions of JavaScript used `var` keyword e.g.:  `var message = 'Hello World';`
* Above is the short syntax where the variable is defined \(or declared\) and assigned a value in the same statement
* A longer syntax will use two statements:
* ```
  let message;
  message = 'Hello Worlds';
  ```
* Variable can be used in statements that follow the declaration of the variable, e.g.: 
* ```
  let message;
  message = 'Hello World';
  console.log(message);
  ```
* But not the other way around, an ERROR will be reported about undeclared/unknown variable `message`:
* ```
  console.log(message); <-- ReferenceError: message is not defined
  let message = 'Hello World';
  ```
* Variables declared with `const` instead of `let` cannot change their value:
* ```
  const message = 'Hello World';
  message = 'I am Groot'; <-- TypeError: Assignment to constant variable.
  ```



