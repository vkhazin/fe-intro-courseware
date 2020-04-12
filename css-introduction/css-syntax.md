# CSS Syntax
  
[![](/assets/css-syntax.gif)](https://www.w3schools.com/whatis/whatis_css.asp)

 Syntax is an arrangement of words and characters to create well-formed sentences in a language, human or computer

In CSS we use _**CSS Element Selector**_ to "find" (or select) the HTML elements you want to style.

**We can divide CSS selectors into five categories:**

 - Simple selectors (select elements based on name, id, class)
   
   Combinator selectors (select elements based on a specific
   relationship between them)
   
   Pseudo-class selectors (select elements based on a certain state)
   
   Pseudo-elements selectors (select and style a part of an element)
   
   Attribute selectors (select elements based on an attribute or
   attribute value)

This page will explain the most basic CSS selectors.

**The element selector selects HTML elements based on the element name/tag.**
```css
h1 {
	text-align: center;
	color: red;
}
```
  **The CSS id Selector**

  The id selector uses the id attribute of an HTML element to select a specific element.

  The id of an element is unique within a page, so the id selector is used to select one unique element!

 To select an element with a specific id, write a hash (#) character, followed by the id of the element.

***CSS***
```css
#my-title{
	text-align: center;
	color: red;
}
```

***HTML***
```html
	<h1 id="my-title">My Tasks</h1>
```

**The CSS class Selector**

In this example all HTML elements with class="center" will be red and center-aligned:

***CSS***
```css
.my-title {
  text-align: center;
  color: red;
}
```
***Html***:
```html
<h1 class="my-title">My Tasks</h1>
```