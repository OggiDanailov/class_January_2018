###Positioning
https://www.thoughtco.com/absolute-vs-relative-3466208

- position: static (this is the default one; top, left, right, bottom will not affect an element if it is static)

####relative
- position: relative (relative to its own position); Relative positioning uses the same four positioning properties as absolute positioning, but instead of basing the position of the element upon its closest non-staticly positioned ancestor, it starts from where the element would be if it were still in the normal flow.
- Relative Positioning: Elements positioned relative are still in the normal document flow. They don't influence the layout of surrounding elements.  

####absolute
- position: abolute (is positioned relative to the nearest positioned ancestor); This value tells the browser that whatever is going to be positioned should be removed from the normal flow of the document and instead placed in an exact location on the page. This is calculated based on that element's closest non-staticly positioned ancestor.  
-  Elements positioned absolute are relative to its first parent that is positioned relative. 
-  If no parent element is positioned relative, then the browser viewport is the positioning context by default.
-  Absolute positioning removes elements from the document flow.


- position:fixed - it will stick to the given position no matters if you scroll up and down.

###Flex

Before the Flexbox Layout module, there were four layout modes:

Block, for sections in a webpage
Inline, for text
Table, for two-dimensional table data
Positioned, for explicit position of an element



 - we delcare the parent element as display:flex;
 - flex-direction - can be either column or row;
 - justfy-content - will align center the elements (like text-align: center in inline-block)


 ###Grid

 - similarly to flex box we declare as display: grid the parental element;
 - grid-column-gap/ grid-row-gap;
 - grid-column-start/grid-column-end;
 - grid-row-start/grid-row-end;
 - grid-template-columns;
 - grid-template-rows:
 - justify-content: center; (The justify-content property is used to align the whole grid inside the container.)
 - align-content (The align-content property is used to vertically align the whole grid inside the container.)j



###Normalize.css

- css reset  - it is a way of keeping your brower more consitently. 
- https://necolas.github.io/normalize.css/
- it is standard to have it in work environment; most frameworks and libraries (like bootstrap) - have some sort of reset css included.
- make sure you place it above your css files!
- * { margin: 0; padding: 0} is like normalizer as well.

- background-color: hex

###Mobile responsivness
- syntax:
- you have to include the view tag:	`<meta name="viewport" content="width=device-width, initial-scale=1">`
- ####viewport - 
A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed. In web browser terms, it refers to the part of the document you're viewing which is currently visible in its window (or the screen, if the document is being viewed in full screen mode). Content outside the viewport is not visible onscreen until scrolled into view.

- @media all and (min-width: 481px) and (max-width:767px){  
	 body {  
		background-color: teal;  
	}  
}

- min-width; max-with - it prevents an element to become smaller/bigger than given width.

####Exercise 1
Build an image gallery using floats  and the CSS background-image property on `<div>s` instead of `<img>` tags that:  
-  also looks good when the browser is resized to 400px  
-    uses a different, smaller background-image for each image when the browser is resized  
-       has a frame around each image in full-size width and no frame at 400px

- examples of animation with css and responsive design:
- http://onesharedhouse.com/thestory/
- https://www.supremo.tv/typeterms/
- https://open.spotify.com/view/2016-page
- https://chekhov.withgoogle.com/alive

###Animation Key Frames/Transitions
- transition - it has to have duration; otherwise it won't kick in
- transform (scale, rotate, skew, matrix)
- animation  - animation: (name of function); then outside of the element you define the function with the @keyframes (name of the function)

####Exercise 2
Go to:
https://www.w3schools.com/cssref/css3_pr_transform.asp
- create 4 divs and apply different animation techniques; feel free to experiment!
- look into: all animation, transition and transform

 







