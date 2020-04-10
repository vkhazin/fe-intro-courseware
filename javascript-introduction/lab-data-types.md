# Lab: Data Types

1. Navigate to [https://repl.it](https://repl.it) and login if required
2. Create a new repl and select JavaScript template, name it `lab-js-data-types`
3. In the middle pane, you will be writing JavaScript code
4. The `run` button on the top will execute your JavaScript
5. In the right pane, you will see the result of code execution
6. Declare two variables:
7. ```text
   let num1;
   num1 = 1;
   let num2 = 2;
   ```
8. Compute the sum of the two and print out the result:
9. ```text
   const num3 = num1 + num2;
   console.log(num3);
   ```
10. What's the difference between declaration `let` and `const`?
11. Execute the statements with `run` button
12. Delete the previous statements to declare two new variables and to print the result of adding them one to another:
13. ```text
    let str1 = 'Hello';
    let str2 = 'World!';
    const str3 = str1 + str2;
    console.log(str3);
    ```
14. Execute the statements with `run` button
15. How would you introduce a space between the two words printed out?
16. Delete the previous statements to and type the following statements:
17. ```text
    const num4 = 4;
    const str4 = 'Number:';
    console.log(str4 + num4);
    ```
18. Execute the statements with `run` button
19. How do you explain the result?
20. Clear the script pane from the previous statements and create a JavaScript object and try assigning a new value to it:
21. ```javascript
    const task = {
        name: 'Math Test',
        dueDate: '2020-06-01'
    };
    task = {
        name: 'Science Test',
        dueDate: '2020-06-01'
    };
    console.log(task);
    ```
22. Execute the statements with `run` button
23. How do you fix the error?
24. Let's try another example:
25. ```javascript
    const task = {
        name: 'Science Test',
        dueDate: '2020-06-01'
    };
    task.dueDate = '2021-06-01';
    console.log(task);
    ```
26. Execute the statements with `run` button
27. Why we were able to assign a new value to the `dueDate` field when the `task` variable was declared with a `const`?
28. Clear the script pane from the previous statements and create a JavaScript array:
29. ```javascript
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
30. Execute the statements with `run` button
31. Now create a new array of tasks with 4 different forthcoming tests, with a name, a due date, and a status
32. Print to the console details of the task \#3
33. To print one object out of the array, add the following statement:
34. ```javascript
    console.log(tasks[0]);
    ```
35. Execute the statements with `run` button
36. The JavaScript syntax used here: tasks\[0\] is extracting the first member or element of the array
37. Arrays count its  members from 0 rather than from 1
38. Try extracting or accessing the non-existing element of the array: `console.log(tasks[2]);` and `run` the changes
39. What result did you get and why?

