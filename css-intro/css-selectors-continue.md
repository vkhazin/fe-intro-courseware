  

# CSS Selectors - Continue

  

In the slide before we discussed Simple selectors based on name, id and class to style elements in a HTML document.

The next group of selector are called combinator selectors


**Combinator selectors**

A **combinator** is something that explains the relationship between the selectors.
 

CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.
 

There are four different combinators in CSS:
  

- descendant selector (space)

- child selector (>)

- adjacent sibling selector (+)

- general sibling selector (~)

  

Today we discuss descendat and child selector as more popular selectors.
  

**Descendant selector (space)**

The following example selects all <p> elements that placed inside of a <div> element:

	div p {

	background-color: yellow;

	}

	<div>
		<p>Paragraph 1.</p>
	</div>
	<div>
		<p>Paragraph 2.</p>
	</div>
		<p>Paragraph 3.</p>
	</div>
	<p>Paragraph 4.</p> <!-- not in div -->

![](/assets/css-selector-example1.png)

**Child selector >**

The following example selects all <p> elements that are children of a **div** element:

	<div>
		<p>Paragraph 1 in the div.</p>
		<p>Paragraph 2 in the div.</p>
		<section><p>Paragraph 3 in the div.</p></section> 
		<p>Paragraph 4 in the div.</p>
	</div>
	<p>Paragraph 5. Not in a div.</p>
	<p>Paragraph 6. Not in a div.</p>

![](/assets/css-selector-example2.png)