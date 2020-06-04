# Building a List

* Replacing a text on the page is a simpler example of Html manipulation
* A more complex example would be to populate a list using JavaScript array
* DOM has a method to add elements to a parent element, e.g.
* Html markup with almost empty table:
  ```html
  <table class="table table-striped table-hover">
      <thead><tr class="table-header"><td><b>Task</b></td></tr></thead>
      <tbody id="taskList"></tbody>
  </table>
  ```
* JavaScript to add a new row for every element in the array:
  ```javascript
  const tasks = [
    { name: "Math Test"},
    { name: "English Essay" }
  ];
  const tbody = document.getElementById("taskList");
  for (i = 0; i < tasks.length; i++) {
    const newRow = document.createElement('tr');
    const newColumn = document.createElement('td');
    const newText = document.createTextNode(tasks[i].name);
    
    newColumn.appendChild(newText);
    newRow.appendChild(newColumn);
    tbody.appendChild(newRow);
  } 
```