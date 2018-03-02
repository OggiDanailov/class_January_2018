- React
1.
- first line of class extends (or inherits from class Component);
- we will wrtie our constructor and super; this is where we will pass values;
- next method this is render; we always need a return in render;
- ReactDOM.render goes in the end of the file; thsi is a method in React. The first argument is what do we want to render - in our case <Hello />;
- and the second argument is where on the HTML it will be rendered.
2.
- create new class Massage that will be dynamic
- in the constructor I will pass the key word props;
- in the super I will also pass the key word props which will inherit from React.Component; 
- props is an object and everything that we pass as argument becomes a property of this object.
- the curly braces around are like embedded ruby; it evaluates to JS; without it reads it like HTML.
3.
- state - when we pass a data dynamically; when we want to change the value of something we will be using state object.
- JSX - it allows us to write html in our React JS.
- when you write a function in JS class you don't need the key word function.
- setState is a method that comes from the Component (that's why we use the this keyword) and it takes an object literal as an argument.
- if you don't do bind on the method the error will tell you that cannot read property of setState so we have to set 'bind'; the problem is that we are losing the value of 'this'. In JS you can attach the 'this' value through 'bind'; here this.setState is in the scope of the method so we have to bind the method to the general object (component);
