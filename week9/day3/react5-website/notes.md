1. I create an array that contains objects called blogList;
2. You pass the bloglist as an argument in the App render; now blogs contain the array;
3. In the state you set this.state.blogList which equals props.blog;
3. when you render Blogs you pass dynamically the value of the blogs and save them in bloggy;
4. in the function Blogs I pass the blogs as an argument;
5. I assign arugment.blogs.map() to a random function and render the two fields of the object;
6. Finally I return the the random function
