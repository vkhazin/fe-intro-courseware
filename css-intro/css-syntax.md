  

# CSS Syntax

  
[![](/assets/css-syntax.gif)](https://www.w3schools.com/whatis/whatis_css.asp)

Syntax is an arrangement of words and characters to create well-formed sentences in a language, human or computer

In CSS we use _**CSS Element Selector**_ to "find" (or select) the HTML elements you want to style.
The selector points to the HTML element you want to style. The  declaration block contains one or more declarations separated by  semicolons. Each declaration includes a CSS property name and a   value, separated by a colon.

In this example all <p> elements will be center-aligned, with a red text color:

	p {
		color: red;
		text-align: center;
	}


## Simple Selectors
  

**HTML element selector**

CSS HTML element selector selects HTML elements based on the element name/tag.**

	h1 {
	text-align: center;
	color: red;
	}

  
**CSS id Selector**
 

CSS id selector uses the id attribute of an HTML element to select a specific element.
The id of an element is unique within a page, so the id selector is used to select one unique element!
To select an element with a specific id, write a hash (#) character, followed by the id of the element.

	#my-title{
		text-align: center;
		color: red;
	}


`<h1 id="my-title">My Tasks</h1>`

  
**CSS class Selector**
  

In the **CSS**, a **class selector** is a name preceded by a full stop (“.”) The difference between an ID and a **class** is that an ID can be used to identify one element, whereas a **class** can be used to identify more than one.

  
In the example below all HTML elements with class="my-title" will be red and center-aligned:

	.my-title {
		text-align: center;
		color: red;
	}
`<h1 class="my-title">My Tasks</h1>`

![](/assets/lab-css-syntax.png)