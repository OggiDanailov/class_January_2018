1. SASS

Syntactically Awesome Style Sheets
SASS is like css extension - you write a code in SASS - the files have scss extension - and then SASS compiles these files to CSS.
Some examples of CSS preprocessor include: Sass, Less and Stylus.

There are libraries written in SASS like Bourbon and Compass;

- Installing SASS:
gem install sass; create a folder structure like:
-index.html
stylesheets
	-main.scss
	
you have to run the command:
sass --watch stylesheets:css

###SASS functionality:
- partials; these are files that awlays start with underscore and they can be imported in the main scss file with the @import 'navbar' syntax;

- variables - start with $ sign  - ver useful overall

- @mixin - it is like a function; you can wrap a code within it and put this code into some specific element; @mixings also can take parameters like a real function;

- @extend - it is a very similar to @mixin although @mixin acts like a function - they can take parameters

###Libraries

-bourbon
gem install bourbon    
bourbon install - install it in the stylesheets folder 
@import "bourbon/bourbon" - in the main.scss
you have to restart the server  

1. Exercise:
a. Create a basic website that has al least:
- 4 partials;  
- you use some $variables;  
- you use at least 2 @mixins;  
- you use @extend;
- 
b. Import Bourbon and try to incorporate some of existing functionality 
  
c. The site should include:
- images;
- navbar;
- footer;
- a lot of box shadow, different colors, fonts (so you can easily change them through variables
- divs with dummy text



