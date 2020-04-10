# Object

* JavaScript is an object-based language
* Objects provide a structured approach to programming
* Almost everything is an object or acts like an object
* An object is created with curly brackets `{}`, list of properties, and/or functions
```
const task = {
  name: 'Math Test',
  dueDate: '2020-06-01',
  displayName: function() {
    return this.name + ' (' + this.dueDate + ')';
  }    
};

console.log(task);                // will print the complete task object
console.log(task.name);           // will print task name
console.log(task.displayName());  // will print output of function displayName
```
* `this` references the object itself and `this.name` references `dueDate` of the current object
* Psst: `console` is an object as well, part of the JavaScript language itself