# Logical Operators

* Used to define a condition frequently before executing a statement
* In human language: when I have more than $1 and less than $3 I am doing ok!
* In JavaScript you would express the same statement as two conditions combined:

```
let a = 2;                        // Declare a variable and assign a value
if ((a > 1) && (a < 3)) {         // Evaluate two conditions using 'and' criteria
  console.log('I am doing ok!');  // When condition resolves to true, print out a message
}                                 // End of the conditional statements
```

## Full list of logical operators

* `&&` logical 'and', true when both are true: `a && b`
* `||` logical 'or', true when either or both `a` or `b` are true: `a || b` 
* `!` logical 'not', true when `a` is false or not true: `!a`

