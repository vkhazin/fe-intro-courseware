
## Combinator selectors
 
A **combinator** is something that explains the relationship between the selectors.

CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.   

There are four different combinators in CSS:

- descendant selector (space)

- child selector (>)

- adjacent sibling selector (+)

- general sibling selector (~)

**Descendant selector (space)**
 
The following example selects all `<p>` elements that placed inside of a `<div>` element:

	div p {
		background-color: yellow;
	}

	<div>
		<p>Paragraph 1.</p>
	</div>
	<div>
	<p>Paragraph 2.</p>
	</div>
	<div>
	<p>Paragraph 3.</p>
	</div>
	<p>Paragraph 4.</p> <!-- not in div -->

![](/assets/css-selector-example1.png)

  
You can learn more about other descendant selectors https://www.w3schools.com/css/css_combinators.asp