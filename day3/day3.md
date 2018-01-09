###Nomralize.css

- css reset  - it is a way of keeping your brower more consitently. 
- https://necolas.github.io/normalize.css/
- it is standard to have it in work environment; most frameworks and libraries (like bootstrap) - have some sort of reset css included.
- make sure you place it above your css files!
- * { margin: 0; padding: 0} is like normalizer as well.

###Mobile responsivness
- syntax:
- you have to include the view tag:	`<meta name="viewport" content="width=device-width, initial-scale=1">`

- @media all and (min-width: 481px) and (max-width:767px){  
	 body {  
		background-color: teal;  
	}  
}

####Exercise 1
Build an image gallery using floats and the CSS background-imageproperty on `<div>s` instead of `<img>` tags that:  
-  also looks good when the browser is resized to 400px  
-    uses a different, smaller background-image for each image when the browser is resized  
-       has a frame around each image in full-size width and no frame at 400px





