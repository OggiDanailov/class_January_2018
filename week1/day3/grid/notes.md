great source:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout

grid-template-columns: it will give you how many columns your grid will have;
when we declare in the parent element display:grid all children elements will be grid elements

Grid has a solution for this with the minmax() function. In this next example I am using minmax() in the value of grid-auto-rows. This means automatically created rows will be a minimum of 100 pixels tall, and a maximum of auto. Using auto means that the size will look at the content size and will stretch to give space for the tallest item in a cell, in this row.