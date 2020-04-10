# Lab: Functions & Objects

1. Navigate to [https://repl.it](https://repl.it) and login if required
1. Create a new repl and select JavaScript template for it, provide a name `lab-js-functions-objects`
1. In the middle pane, you will be writing JavaScript code
1. The `run` button on the top will execute your JavaScript
1. In the right pane, you will see the result of code execution
1. This lab will not provide detailed instructions similar to the previous lab
1. Declare a new function `multiplyNumbers`
1. Add two parameters to the function declaration with valid names
1. Inside the function multiple the two parameters and return the result
1. Make a call to the function and print the result using `console.log`
1. When you have verified the results, clean the code pane to start fresh
1. Create a `task` object with the following properties:
```
name
dueDate
```
1. Add a function to the created object to return `{name} ({dueDate})` string when called
1. Make a call the created function and print the result using `console.log`
1. When you have verified the results, clean the code pane to start fresh
1. Declare an array of tasks with a couple of tasks
1. Loop through array using `for`, `while`, or `do...while` loop
1. Print out the name of the task for each element in the array
1. Add a new task to the array after the loop using the following syntax:
```
const newTask = {
  name: 'Clean bedroom',
  dueDate: "3000-12-31"
};
tasks.push(newTask);
```
1. Learn how to use an array specific loop [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) to print the out name of the array, the syntax is different using `=>` instead of the previously used `tasks[i]`
