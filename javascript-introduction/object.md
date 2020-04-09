# Object

* JavaScript is an object-based language
* Objects provide a structured approach to programming
* Almost everything is an object or acts like an object
* An object is created with curly brackets `{}`, list of properties, and/or functions
```
let person = {
  firstName: 'John',
  lastName: 'Smith',
  dob: '1900-01-01',
  displayName: function() {
    return this.firstName + ' ' + this.lastName + ' (' + this.dob + ')');
  }
};
console.log(person);
console.log(person.firstName);
person.displayName();
```
* `this` references the object itself and `this.firstName` references `firstName` of the current object
* Psst: `console` is an object as well, part of the JavaScript language