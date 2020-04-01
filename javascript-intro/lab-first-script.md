# Lab: First Script

* Navigate to [https://repl.it](https://repl.it) and login if required
* Create a new repl and select JavaScript template, name it `lab-js-first-script`
* In the middle pane, you will be writing JavaScript code
* The `run` button on the top will execute your JavaScript
* On the left pane, you will see the result of code execution
* In middle pane declare two variables named `message1` and `message2`:
* ```
  let message1;
  let message2;
  ```
* Assign values to the variables, replace `Groot` with your name:
* ```
  message1 = 'Hello World!';
  message2 = 'I am Groot!';
  ```
* Print the message to the console:
* ```
  console.log(message1);
  console.log(message2);
  ```
* `run` the code and see the results in the left pane
* When you see an error instead of the results double check your syntax, no spaces in variable names, missing opening/closing quotes, a mismatch between single and double quotes are the common cases
* Variables can be assigned a new value as well unless they have been declared as `const`:
* ```
  let message = 'Hello World';
  console.log(message);
  message = 'I am Groot!';
  console.log(message);
  ```
* Multiple variables can be declared in the same statements and assigned a value from one to another in one statement:
* ```
  let value1, value2, value3;
  value1 = value2 = value3 = 1;
  console.log(value1);
  ```
* To get familiar with common errors let's make some intentional mistakes to see what error message we get
* Name a variable `1value` and see what happens
* Name a variable `my value` and see what error you get
* Misspell a variable name when referencing it: `let value1 = 1; console.log(value2);`
* What's a variable?
* How do you use a variable?
* What is a statement and how is it different from a variable?



