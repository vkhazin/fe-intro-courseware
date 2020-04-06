# Logical Operators

* Used to define a condition frequently before executing a statement
* In human language: do I have more than $1 and less than $3 then I am doing ok!
* In JavaScript you would express the same statement as two conditions combined:
```
let i = 2;
if ((i > 1) && (i < 3)) {
  console.log('I am doing ok!');
}
```
* List of JavaScript logical operators:

| Operator | Description | Example |
| - | - | - | 
| && | And | True when both are true: `a && b` |
|  | Or | True if either or both `a` or `b` is true: `a || b` |
| ! | Not | True if `a` is not true: `!a` |

