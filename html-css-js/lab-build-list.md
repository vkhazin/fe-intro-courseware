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
  const tbody = document.getElementById("taskList");
  for (i = 0; i < tasks.length; i++) {
    // ...
  }
  ```
  8. Using the previous slide(s) example populate the list with columns: `taskName` and `dueDay` hint: the slide example adds one child `td` element to the row `tr` element, you will need to add two `td` child elements to row `tr` element 
