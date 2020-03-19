# Lab: CSS Syntax

* Open Google Chrome browser to [https://repl.it](https://repl.it/)
* Open the repl you have created in the previous labs
* Select `index.html` in the `Files` pane to edit it
* Locate the table element and remove the border attribute with its value
* Locate the div element and remove the `align` attribute with its values 
* Between the opening and closing tags for head element, insert a reference to the stylesheet file:
* ```
  <link rel="stylesheet" type="text/css" href="style.css"/>
  ```
* Select `style.css` in the `Files` pane to edit
* Add a style to format `h1` element with your desired colour and a font-size or font-family, e.g.:
* ```
  h1 {
      color: blue; 
      font-size: 40px;
      font-family: 'Times New Roman';
  }
  ```
* Explorer what other style elements you can make work: [https://www.w3schools.com/cssref/](https://www.w3schools.com/cssref/), not everything will work as expected
* `run` the changes every time you make a modification to css/html files
* Select index.html in the `Files` pane to edit
* Add an id attribute to the Html element you have surrounded the text `The Cradle of Humankind` with e.g.:
* ```
  <h2 id=subTitle>The Cradle of Humankind</h2>
  ```
* Select `style.css` in the `Files` pane to edit
* Use the [CSS id Selector ](https://www.w3schools.com/css/css_selectors.asp)syntax to create a style for the text: `The Cradle of Humankind`
* Experiment with different options to achieve the desired look and feel
* Create a new class in style.css to highlight for a table row:

```
.highlighedRow {
  color: darkblue;
  background-color: yellow
}
```

* Edit index.html to add the reference to the above-created class using [CSS Class Selector](https://www.w3schools.com/cssref/sel_class.asp) syntax for every second opening `<tr>` tag
* Now figure out how to position the image horizontally-centred using an online reference without detailed instructions: [https://www.w3schools.com/howto/howto\_css\_image\_center.asp](https://www.w3schools.com/howto/howto_css_image_center.asp)

![](/assets/lab-css-syntax.png)



