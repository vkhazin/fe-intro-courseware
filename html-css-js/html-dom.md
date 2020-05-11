# Html Document Object Model

* The browser loads Html page and creates a tree-like structure: a Document Object Model (DOM)
[![](../.gitbook/assets/html-dom.gif)](https://www.w3schools.com/js/js_htmldom.asp)
* The DOM can be modified using Javascript to add behaviours to the page
* Html with element identified by an id: `<p id="message"></p>`
* Can be found by Javascript and modified
```
let elm = document.getElementById('message');
if (elm) { elm.innerHTML = 'Hello World!'; }
```
* And the 'Hello World!' text will be printed in the browser
