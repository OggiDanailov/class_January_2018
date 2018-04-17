##HTML
hyper text language markup

- tags - HTML document contain tags. Elements are generated when tags have been parsed (HTML document has been loaded). 
<h6>Hello world</h6> - 
the whole line is an HTML element; each element starts with a HTML tag; some of them need closing tags as well.
- void elements - elements that do not need closing tags.
- h1 .. h6 - header tags;
-  p  
-  div
-  head  
-  body  
-  title
https://www.w3schools.com/tags/tag_doctype.asp  
- header  
- footer  
- nav
- ul
- li  
-  a  
-  img  
- audio  

##CSS
Cascading Style Sheets
- different ways of including your css;
- the most common and best way is to write your css on a separate .css file. You need to link your html with css; this is done in the head section of the html
###Selectors
- class vs. id 
more info here:
https://www.w3schools.com/cssref/css_selectors.asp   

###Properties/Values
- border/background-color
- width/height
- padding/margin

###Percentage vs. px vs. em 
https://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/   
 
- Pixels (px): Pixels are fixed-size units that are used in screen media. One pixel is equal to one dot on the computer screen  
- Points are traditionally used in print media (anything that is to be printed on paper, etc.). One point is equal to 1/72 of an inch. Points are much like pixels, in that they are fixed-size units and cannot scale in size.  
- The “em” is a scalable unit that is used in web document media. An em is equal to the current font-size, for instance, if the font-size of the document is 12pt, 1em is equal to 12pt. Ems are scalable in nature, so 2em would equal 24pt. Ems are becoming increasingly popular in web documents due to scalability and their mobile-device-friendly nature.
- vw - 	Relative to 1% of the width of the viewport  
- vh - Relative to 1% of the width of the viewport

###Display
- inline
- inline-block  
- block  
  
##1. Exercise Display:
- Create 4 `<p>` elements with 4-5 sentences of lorem ipsum inside of them, with some of these words selected with `<span>` tags  
- Give all of the elements different classes, give them a set width (say 250px) and try seeing what happens when you change display: block elements to display: inline elements and vice-versa  
- Also experiment with display: inline-block  
- To more clearly see what's going on, try putting a border around your elements

###Float
- float property indicates in which direction given elements should float. Most commonly used is the float:left property.
- clear - it clears elements from floating. The most common way to use the clear property is after you have used a float property on an element.  

- audio  
- line-height  
- background-image  
- background-size  

##2. Exercise Float:
- Create 2 `<p>` elements with 4-5 sentences of lorem ipsum inside of them
-   Also put an `<img>` element on the page above the `<p>` elements
-   Give all of the elements different classes and try floating the `<img>` first, than the `<p>` elements to get an idea of how floats impact page layout



##Exercise 3: 
Create a fake website for a newspaper, "The New York Code + Design Academy Times"
-  There should be two pages (see "mockups" folder for visuals)•   Home page, where 10 fake articles are listed in a two-column layout  
- they should all link to:  
-  An example article with a link to Facebook that stays on the page no matter how much the page is scrolled  
-   The example article should have a photo with text that wraps around the photo (hint: use a float!)  
-   Use margin: 0 auto; width: 900px; to make the pages look nice and centered

  


