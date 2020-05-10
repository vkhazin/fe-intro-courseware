# Lab: CSS Syntax

*  Open Google Chrome browser to [https://repl.it](https://repl.it/)
*  Open the repl you have created in the previous labs
*  Select `index.html` in the `Files` pane to edit it
*  Locate the table element and remove the border attribute with its value
*  Locate the div element and remove the `align` attribute with its values 
*  Between the opening and closing tags for head element, insert a reference to the stylesheet file by coping the line below:
```html
<link rel="stylesheet" type="text/css" href="style.css"/>
```
*  This will allow a web browser to use the styles defined in the `style.css` file and decorate `index.html` content
*  Select `style.css` in the `Files` pane to edit
*  Add a style to format `h1` element with your desired colour and a font-size or font-family, e.g.:
```css
h1 {
    color: blue; 
    font-size: 40px;
    font-family: 'Times New Roman';
    background-color: red;
}
```
*  `run` the changes every time you make a modification to CSS/Html files
*  Select index.html in the `Files` pane to edit
*  Add an id attribute to the existing Html element with `h2` tag, e.g.:
```html
<h2 id="subTitle">...</h2>
```
*  Select `style.css` in the `Files` pane to edit
```css
.highlightedRow {
  color: darkblue;
  background-color: yellow
}
```
*  Edit index.html and find tr HTML tag that represents table header, than add reference to the above-created class using [CSS Class Selector](https://www.w3schools.com/cssref/sel_class.asp) syntax e.g.: `<tr class="table-header-row">`, pay attention to the case-sensitive spelling!
![](../.gitbook/assets/lab-css-syntax.png)
*  Now let's try to add a highlight to every other row in our table, create a new CSS class with background color = #E1F5FA and apply to every other table row
