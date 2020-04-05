# If...Else Statements

* All programming languages support different actions based on conditions
* JavaScript allows writing code than behaves differently depending on result of a comparison
* JavaScript executes different statements based on the comparison operators, e.g. greater than: `1 > 0`
* The simplest conditional statement in JavaScript is `if` statement, e.g.:
```
let value1 = 1;
let value2 = 2;

if (value1 < value2) {
  console.log('value1 variable holds value that is less than value of variable value2)
  console.log('value1: ' + value1);
  console.log('value2: ' + value2);
}

console.log('Done evaluating condition');
```
* The statements between parentheses `{}` will be executed when the condition is evaluated to `true` only
* The statements outside of the parentheses will be executed regardless of the condition evaluation
