# Lab: CSS Syntax

  

  Open Google Chrome browser to [https://repl.it](https://repl.it/)
   
   Open the repl you have created in the previous labs
   
   Select `index.html` in the `Files` pane to edit it
   
   Between the opening and closing tags for head element, insert a
   reference to the stylesheet file by coping the line below:

	<link rel="stylesheet" type="text/css" href="style.css"/>


 This will allow a web browser to use the styles defined in the `style.css` file and decorate `index.html` content

 Select `style.css` in the `Files` pane to edit

Add a style to format `h1` element with your desired colour and a font-size or font-family, e.g.:


	h1 {

	color:#0078AC;

	font-size: 32px;

	font-family: 'Open Sans';

	}
`run` the changes every time you make a modification to CSS/Html files

* Select index.html in the `Files` pane to edit

* Select `style.css` in the `Files` pane to edit

* Use the [CSS class Selector ](https://www.w3schools.com/css/css_selectors.asp) syntax to make "Created by" text bold.

* Now we want to highlight every other row in our tasks table

* Create a new class in `style.css` for table header row:

		.table-header-row {

				background: #E6E6E6;

				font-weight: 600;

				color:#646464;
	}
	
*Edit index.html and find tr HTML tag that represents table header, than add reference to the above-created class using [CSS Class Selector](https://www.w3schools.com/cssref/sel_class.asp) syntax e.g.: `<tr class="table-header-row">`, pay attention to the case-sensitive spelling!
 

Now let's try to add highligting to every other row in our table, create a new CSS class with background color = #E1F5FA and apply to every other table row

![](/assets/lab-css-syntax.png)