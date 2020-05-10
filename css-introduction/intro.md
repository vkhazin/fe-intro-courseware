# CSS: Cascading Style Sheets
 
[![](/.gitbook/assets/html-vs-css.jpeg)](https://steemit.com/dmania/@moeenali/html-vs-css-d-zg1hbmlh-ufjik)
  
* CSS describes how HTML elements are to be displayed or [rendered](https://dictionary.cambridge.org/dictionary/english/render)

* CSS (Cascading Style Sheets) allows you to create great-looking web pages

* HTML \(Hypertext Markup Language\) is used to create the content of a page, e.g. text

* CSS \(Cascade Styling Sheets\) is responsible for the layout/position, visual effects and element styles such as color, font, size and many other characteristics 

* CSS is a rule-based language — you define rules specifying groups of styles that should be applied to particular elements or groups of elements on your web page. For example "I want the main heading on my page to be shown as large red text."

The following code shows a very simple CSS rule:

	h1 {

		color: red;

	}
  
When above style applied to h1 HTML element, it will color the element in red color.

The rule opens with a selector. This selects the HTML element that we are going to style. In this case we are styling level one headings <h1>

CSS can contains many rules

	h1 {

	color: red;

	font-size: 5em;

	}

	p {

	color: black;

	}

  
Adding CSS to our document

The very first thing we need to do is to tell the HTML document that we have some CSS rules we want it to use. There are three different ways to apply CSS to an HTML document that you'll commonly come across, however, for now, we will look at the most usual and useful way of doing so — linking CSS from the head of your document.

Create a file in the same folder as your HTML document and save it as styles.css. The .css extension shows that this is a CSS file.

To link styles.css to index.html add the following line somewhere inside the <head> of the HTML document:

	<link  rel="stylesheet"  href="styles.css">

This <link> element tells the browser that we have a stylesheet, using the rel attribute, and the location of that stylesheet as the value of the href attribute. You can test that the CSS works by adding a rule to styles.css.