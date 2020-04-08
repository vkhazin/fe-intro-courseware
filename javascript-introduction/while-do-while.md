# while & do...while

* While loop evaluates the condition before executing the statement\(s\):

  ```text
  while (condition) {
  // Statement(s) to be executed
  }
  ```

* Condition can use any of the logical operators we covered before
* When condition resolves to `true` the loop continues, otherwise it stops:

  ```text
  let i = 0;
  while (i < 5) {
  console.log('i = ' + i);
  i++; // Skip this statement and the loop will run forever!
  }
  ```

* do...while loop is similar, but executes first and evaluates the condition second:

  ```text
  let i = 0;
  do {
  console.log('i = ' + i);
  i++; // Skip this statement and the loop will run forever!
  }
  while (i < 5);
  ```

* There are a couple more of [loop options](https://www.tutorialrepublic.com/javascript-tutorial/javascript-loops.php) in JavaScript

