# User Interactions

* The purpose of user interface is to allow the user to interact with a website
* There are Html elements for user interactions called [inputs](https://www.w3schools.com/html/html_form_input_types.asp)
* Input, for user to type a text in: `<input type="text" id="firstName"/>`
* Button, to initiate an action: `<input type="button" value="OK" onclick="OkClick()"/>`
* When the user clicks on the button the JavaScript function `OkClick` will be called
* A function needs to be defined and implemented:
```javascript
function OkClick() {
  // Read value typed by the user
  const firstName = document.getElementById("firstName").value;
  // Format a message to display, notice back tick characters around the text instead of single quotes!
  const message = `Hello ${firstName}!`;
  // Find the element to print message to
  const elm = document.getElementById("message");
  // Update the Html element content
  elm.innerText = message;
}
```
* How do I know it is `value` to read the input and `onClick` to react to the button?
* You don't memorize everything, you search for online documentation, e.g.:
* Search for: [how to read input value in html using javascript](https://www.google.com/search?q=how+to+read+input+value+in+html+using+javascript)
* Or search for: [how to run a script when user clicks on html button](https://www.google.ca/search?q=how+to+run+a+script+when+user+clicks+on+html+button&oq=how+to+run+a+script+when+user+clicks+on+html+button)