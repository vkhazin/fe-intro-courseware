# Lab: Attributes

* Open Google Chrome browser to [https://repl.it](https://repl.it/)
* Select `index.html` in the Files pane
* Find the table element and add an attribute [border](https://www.w3resource.com/html/attributes/html-border-attribute.php) to it with any width
* Change the value for the border attribute to see how it changes the appearance of the table
* Locate the phrase `The Cradle of Humankind` in the Html
* Reformat the text to turn it into an [anchor](https://www.w3schools.com/tags/tag_a.asp) or a link to this [Wikipedia article](https://en.wikipedia.org/wiki/Cradle_of_Humankind)
* `run` the changes and validate that when you click on the text it takes you to the Wikipedia article
* Notice that the article replaces the current page, let's say we wanted to open the link in another tab or browser window
* There is an attribute for it: [target](https://www.w3schools.com/tags/att_a_target.asp)
* Update your Html and validate that the Wikipedia article opens in a new tab or browser window
* Above the table with the game rules
* Add a new element: [img](https://www.w3schools.com/tags/tag_img.asp), if you were to run your changes the image won't display anything on its own
* We need to add [src](https://www.w3schools.com/tags/att_src.asp) attribute to the image element in order for it to display an image
* Add a value for the src attribute: [https://www.thecradleofhumankind.net/assets/images/donate-bg.png](https://www.thecradleofhumankind.net/assets/images/donate-bg.png)
* Consult the syntax using online reference: [https://www.w3schools.com/tags/att\_img\_src.asp](https://www.w3schools.com/tags/att_img_src.asp)
* `run` your changes to confirm the image is showing as expected
* The image likely shown left aligned
* In order to show it in the centre of the page, we can make use of an align attribute, but img element does not really work with it
* A common solution when an element does not support the desired attribute is to place the element inside another element
* [div](https://www.w3schools.com/tags/att_div_align.asp) element is commonly used for such purpose: add `<div>` before `img` opening tag and `</div>` after `img` closing tag
* Add `align` attribute to the `div` element with value `center`:

```
  <div align="center">
    <img src="https://www.thecradleofhumankind.net/assets/images/donate-bg.png"></img>
  </div>
```

* **A warning**: images as other artwork on the Internet are often protected by copyright and you cannot just "borrow" them!
* **Another warning**: while it is possible to beautify Html with attributes, a more common, modern approach, will be to leverage CSS as we will cover in the continuation of this course



