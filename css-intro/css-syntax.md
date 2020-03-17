# CSS Syntax

[![](/assets/css-syntax.gif)](https://www.w3schools.com/whatis/whatis_css.asp)

* This is an example of the syntax to decorate `h1` Html tag and will be applied to all header-1 elements

```
.centeredHeader {
  color: green;
  font-size: 20pxl;
  margin: auto
}
```

* It is called _CSS Element Selector_: apply the style to tags based on their element name
* This is an example of a style that will need to be referenced explicitly by Html tag:

```
<h2 class="centeredHeader">The Cradle of Humankind</h2>
```

* It is called _CSS Class Selector:_ apply the style to tags that specifically reference the class name
* Here is an example of a syntax that will apply the style to all elements that use attribute id equal to the style name:

```
#italicText {
  color: red;
}
```

* In order for this style to be applied to an Html element, it will have to add an attribute `id`:

```
<p id="italicText">A text rendered italic</p>
```

* There are more [CSS selectors](https://www.w3schools.com/css/css_selectors.asp), we will limit our quest to the three above for now...



