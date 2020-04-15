# Arrays

* Arrays are special object and a complex variable to store a group of values with one variable name

  ```javascript
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
  ```

* Content of an array can be accessed by index, e.g.: `console.log(tasks[0].name);`
* Arrays have their own built in functions, e.g. `console.log(tasks.length);`
* We can also loop through all elements in array to print `task.name`:

  ```javascript
  for (i = 0; i < tasks.length; i++) {
    console.log(tasks[i].name);
  }
  ```

