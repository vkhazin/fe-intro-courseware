# while and do...while Loops

* While loop evaluates the condition before executing the statement(s):
```
while (condition) {
  // Statement(s) to be executed
}
```
* Condition can use any of the logical operators we covered before
* When condition resolves to `true` the loop continues, otherwise it stops:
```
let i = 0;
while (i < 5) {
  console.log('i = ' + i);
  i++; // Skip this statement and the loop will run forever!
}
```
* do...while loop is similar, but executes first and evaluates the condition second:
```
let i = 0;
do {
  console.log('i = ' + i);
  i++; // Skip this statement and the loop will run forever!
}
while (i < 5);
```