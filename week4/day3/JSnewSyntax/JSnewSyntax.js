
// // map()
// // // If i already have an array and i want to do the exact same 
// // operation on each of the elements in the array and return the 
// // same amount of items in the array, use the map.

const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]


// animals.map(function(animal, index){
//     console.log(index + " " + animal.name)

// })

// let animal_names = animals.map((animal, index) => {
//     return index+ 1 + " " +  animal.name + ' ' + 'is a great animal'
// })
// console.log(animal_names)

// // filter()
// // If i already have an array but i only want to have items in the array that match certain criteria, use the filter. 
// // The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// var arr = [
//     {"name":"apple", "count": 2},
//     {"name":"orange", "count": 5},
//     {"name":"pear", "count": 3},
//     {"name":"orange", "count": 16},
// ];
    
// var newArr = arr.filter(function(item){
//     return item.name === "orange";
// });



// // forEach()
// // slower than the for loop; there are less scope issues though

// animals.forEach(function(animal){
//     console.log(animal)

// })



// // recursion

// function factorial(num)  
// {  
//     // If the number is less than 0, reject it.
//     if (num < 0) {  
//         return -1;  
//     }  
//     // If the number is 0, its factorial is 1.
//     else if (num == 0) {  
//         return 1;  
//     }  
//     // Otherwise, call this recursive procedure again.
//     else {  
//         return (num * factorial(num - 1));  
//     }  
// }


// var a = 0;

// for(var i=0;i<13;i++){
//     if(i%3 === 0 || i % 4 === 0){
//         a += i;
//     }


// }

// function stars(length) {
//     var string = "";
//     var space = '';
//     for(var i = 0; i < length; i++) {
//         string += "*";
//         space;
//     }

//     console.log(string);
// }


// stars(6);


// function moreStars(length) {
//     for(var i = 0; i < length; i++) {
//         stars(length);
//     }
// }

// moreStars(4);


function factorial(x){
    if(x == 0){
        return -1
    }else if(x == 1){
        return 1
    }else {
        return (x * factorial(x - 1))
    }

}





