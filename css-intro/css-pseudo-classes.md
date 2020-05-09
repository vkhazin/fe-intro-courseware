
  

# CSS Pseudo Classes

A pseudo-class is defines a state of an element.

  
Example:

- Style of an element when user mouse over

- Style of an element when it gets focus

- Style of an element when link is visisted

In CSS the sytax for the pseudo class defined as

	selector : pseudo-class {
	...
	}

**Hover**

In the example below when you hover over the link it will change color,
  
	a:hover {
		color: red
	}

In the second example peseudo class will be applied to all elements with class="mytitle"

	.mytitle:hover {
		color: red
	}

Using pseudo classes links can be displayed in a different ways
  
	/* visited link */  
	a:visited {  
		color:  #00FF00;  
	}  
  
	/* mouse over link */  
	a:hover {  
		color:  #FF00FF;  
	}

# CSS Display property

Display property is one of the exciting properties of CSS it specifies display behavior of an element
The code below will hide H1 element on the page

	h1 {
		display: none
	}

The code above will display `<div>` on a new line like a `<p>` elements

	div {
	  display: block
	}


