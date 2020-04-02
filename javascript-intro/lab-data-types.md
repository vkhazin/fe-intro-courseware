# Lab Data Types

Navigate to [https://repl.it](https://repl.it) and login if required

Create a new repl and select JavaScript template, name it `lab-js-data-types`

In the middle pane, you will be writing JavaScript code

The `run` button on the top will execute your JavaScript

On the left pane, you will see the result of code execution

Declare two variables:

```
let num1;
num1 = 1;
let num2 = 2;
```

Compute the sum of the two and print out the result:

```
const num3 = num1 + num2;
console.log(num3);
```

What's the difference between declaration `let` and `const`?

Execute the statements with `run` button

Delete the previous statements to declare two new variables and to print the result of adding them one to another:

```
let str1 = 'Hello';
let str2 = 'World!';
const str3 = str1 + str2;
console.log(str3);
```

Execute the statements with `run` button

How would you introduce a space between the two words printed out?

Delete the previous statements to and type the following statements:

```
const num4 = 4;
const str4 = 'Number:';
console.log(str4 + num4);
```

Execute the statements with `run` button

How do you explain the result?

Clear the script pane from the previous statements and create a JavaScript object and try assigning a new value to it:

```
const task = {
    name: 'Math Test'
    dueDate: '2020-06-01'
};
task = {
    name: 'Science Test'
    dueDate: '2020-06-01'
};
console.log(task);
```

Execute the statements with `run` button

How do you fix the error?

Let's try another example:

```
const task = {
    name: 'Science Test'
    dueDate: '2020-06-01'
};
task.dueDate = '2021-06-01';
console.log(task);
```

Execute the statements with `run` button

Why we were able to assign a new value to the `dueDate` field when the `task` variable was declared with a `const`?

Clear the script pane from the previous statements and create a JavaScript array:

```
const tasks = [
  {
    name: 'Science Test',
    dueDate: '2020-06-01'
  },
  {
    name: 'Math Test',
    dueDate: '2020-07-01'
  }
];
console.log(tasks);
```

Execute the statements with `run` button

To print one object out of the array, add the following statement:

```
console.log(tasks[0]);
```

Execute the statements with `run` button

The JavaScript syntax used here: tasks\[0\] is extracting the first member or element of the array

Arrays count its  members from 0 rather than from 1

Try extracting or accessing the non-existing element of the array: `console.log(tasks[2]);` and `run` the changes

What result did you get and why?

