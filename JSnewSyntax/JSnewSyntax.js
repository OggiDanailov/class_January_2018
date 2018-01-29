
// map()
// If i already have an array and i want to do the exact same operation on each of the elements in the array and return the same amount of items in the array, use the map.

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


animals.map(function(animal, index){
    console.log(index + " " + animal.name)

})

let animal_names = animals.map((animal, index, animals) => {
    return index+ 1 + " " +  animal.name + ' ' + 'is a great animal'
})
console.log(animal_names)

// filter()
// If i already have an array but i only want to have items in the array that match certain criteria, use the filter. 

let animal_filter_names = animals.filter((animal)=>{
    return animal.size == 'small'
})


