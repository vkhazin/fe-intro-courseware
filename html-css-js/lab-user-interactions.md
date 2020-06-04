# Lab: User Interactions

1. Navigate to [https://repl.it](https://repl.it) and login if required
2. Create a new repl and select Html, Css, JS template, name it `lab-user-interactions`
3. On the right you will be selecting files to edit
4. In the middle pane, you will be writing Html/Javascript code
5. The `run` button on the top will render the Html and run Javascript
6. In the right pane you will see the result and you can also open the result in a new browser tab/window
7. In the `index.html` page inside the `body` tag, create a new input element for first name
8. The input element should have a label in front of it, e.g.: 'First Name:' and should use type [text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) and have id attribute equal `firstName`, e.g.:
```html
<input type="text" id="firstName"/>
```
9. Under the input field place another input element of [button](https://www.w3schools.com/tags/tag_button.asp) type with text `Ok` and `onClick` attribute with value `OkClick()`, e.g.:
```
<input type="button" value="OK" onclick="OkClick()"/>
```
10. Under the button add a `div` element with attribute named `id` and with value `messageElm`
11. In the `script.js` file create a new function with name: `OkClick`
12. The function code should find html element by id using the [getElementById](https://www.w3schools.com/jsref/met_document_getelementbyid.asp) syntax
13. Read the `value` attribute of the element found in the previous step and assign it to a variable e.g. `const firstName = ...`
14. The next step will be to display the message `Hello ${firstName}` where first name will be replaced by the value of variable declared in the previous step that came for the input element, e.g.
  ```javascript
  const message = `Hello ${firstName}!`;
  //the next line is for debugging purposes only
  console.log(message);
  ```
15. Now we need to find the division where to "print" the message:
```javascript
const messagePlaceholder = document.getElementById("messageElm");
```
16. And then replace the placeholder `innerText` property with the variable named `message`:
```javascript
messagePlaceholder.innerText = message;
```
17. Open the preview in a new browser Tab/Window to see your changes, enter your name in the input element, click on the button and you should see the result: 

    ![](../.gitbook/assets/lab-user-interactions.png)

18. You may also see errors in the [Javascript console](https://www.webucator.com/how-to/how-open-google-chromes-javascript-console.cfm) should be there any errors in your code, e.g.:
```
    TypeError: Cannot set property 'innerText' of null
      at OkClick (/script.js:5:32)
      at HTMLInputElement.onclick (/:12:58)
```
19. Additionally, you can view the html behind every element on the page by using [Inspect](https://www.geeksforgeeks.org/chrome-inspect-element-tool-shortcut/) menu
20. You will be spending as much time debugging your Javascript code as writing it
22. The same goes for Html, Css, and everything else in programming
23. Get used to troubleshooting and to the fact that nothing works as expected for the first 10 times