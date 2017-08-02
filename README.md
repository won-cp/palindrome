Palindrome
===================
In this exercise, you will create a component that allows users to input a word and acknowledge to them whether or not the word is a palindrome (spelled the same forward and backwards).

Release 0
-------------
* Create a UI that has a [text input](http://www.w3schools.com/tags/tag_input.asp) with an onChange event listener attached to it.
 
Release 1
-------------
* In your UI, create a `<p>` that acknowledges whether or not the word in the text box is a palindrome.

Release 2
-------------
* Utilize [ES6 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to render the acknowledgement like so: `[word] [is/is not] a palindrome`

Hints
------
* See the [React documentation](https://facebook.github.io/react/docs/handling-events.html) for info on how to `.bind()` event handlers to interactive elements (e.g. text inputs).
* Referencing the `.value` of the text input field can either be done through the *event* object automatically passed into your event handler function, or via [refs](https://facebook.github.io/react/docs/refs-and-the-dom.html).
