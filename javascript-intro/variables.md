# Variables

* Most of the time a program needs to work with information or data whether storing, accessing, or modifying it
* With the most simple statement such as `1 + 1` the result of the addition needs to be stored somewhere
* To create a variable in modern JavaScript we use a `let` keyword e.g.:  `let message = 'Hello World';`
* Previous versions of JavaScript used `var` keyword e.g.:  `var message = 'Hello World';`
* When searching online for examples you will find both syntaxes and both work in the most recent version of JavaScript
* Above is the short syntax where the variable is defined \(or declared\) and assigned a value in the same statement
* A longer syntax will use two statements:
* ```
  let message;
  message = 'Hello Worlds';
  ```
* Variable can be used in statements, e.g.: 
* ```
  let message;
  message = 'Hello Worlds';
  console.log(message);
  ```
* And can be used to compute values:
* ```
  let value1 = 1;
  let value2 = 10;
  let value3 = value1 * value2 - 1;
  let value4 = value3 * (value1 - 1);
  console.log(value3);console.log(value4);
  ```



