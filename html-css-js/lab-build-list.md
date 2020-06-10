# Lab: Build a List

1. Navigate to [https://repl.it](https://repl.it) and login if required
2. Create a new repl and select Html, Css, JS template, name it `lab-build-list`
3. On the right you will be selecting files to edit
4. In the middle pane, you will be writing Html/Javascript code
5. The `run` button on the top will render the Html and run Javascript
6. Select `index.html` and replace the content with the following markup:
  ```
  <!DOCTYPE html>
  <html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous">
  </head>

  <body>

    <h1>My Tasks</h1>

      <table class="table table-striped table-hover">
        <thead>
          <tr class="table-header">
            <td>
              <b>Task</b>
            </td>
            <td>
              <b>Due Day</b>
            </td>            
          </tr>
        </thead>
        <tbody id="taskList"></tbody>
    </table>

    <script src="script.js"></script>

  </body>

  <html>
  ```
  7. Select `script.js` and paste the following code to get you started:
  ```
  const tasks = [
    { name: "Math Test", dueDay: "Monday" },
    { name: "English Essay", dueDay: "Tuesday" }
  ];
  ```
8. In order to access every element in an array you can use the `for` loop or `forEach` loop
9. To use the `for` loop:
```
  for (i = 0; i < tasks.length; i++) {

  }
```
10. Where `i` is a variable to remember our position going through the array
11. `tasks.length` tells us how long the array is to stay within the array boundaries
12. `i++` will increment our position through the array
13. Now we can print out the content of each array element to the debug window, e.g.: `console.log(tasks[i].name)`
14. The square brackets allow us to access an element inside the array by its position, where first element is in the position `0` not `1` as you may expect
15. The code will not update the html yet, but it will demonstrate how to iterate through an array accessing its elements
16. Now modify the code to print out the `dueDay` of each task in the debug window
17. Now let's start updating the html
18. In the html we have created a table
19. The tables contains `thead` and `tbody`
20. The `tbody` element has an attribute `id` with value `taskList`
21. In order to update html, we will find the `tbody` element by id: `const tbody = document.getElementById("taskList");`
22. For each element in the `tasks` array we will add a new row to the table using `tr` tag:
```
const newRow = document.createElement('tr');
tbody.appendChild(newRow);
```
23. And we will need to add two `td` tags for each `tr`:
```
const nameColumn = document.createElement('td');
newRow.appendChild(newColumn);

const dueDayColumn = document.createElement('td');
newRow.appendChild(dueDayColumn);
```
24. The first `td` will contain a text for task name, e.g.: `tasks[i].name`:
```
const taskNameNode = document.createTextNode(tasks[i].name);
nameColumn.appendChild(taskNameNode);
```
25. The second `td` will contain a text for task dueDate, e.g.: `tasks[i]dueDate`:
```
const taskDueDayeNode = document.createTextNode(tasks[i].name);
nameColumn.appendChild(taskNameNode);
```


  const tbody = document.getElementById("taskList");
  for (i = 0; i < tasks.length; i++) {
    // ...
  }
  ```
  8. Using the previous slide(s) example populate the list with columns: `taskName` and `dueDay` hint: the slide example adds one child `td` element to the row `tr` element, you will need to add two `td` child elements to row `tr` element 
