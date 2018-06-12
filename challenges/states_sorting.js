states = [
		"AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",  
    "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",  
    "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",  
    "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",  
    "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY", 1,2,3,4,5,6,7,
    8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33
    ,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]

var numbers = document.getElementById('numbers')
var randomizer = document.getElementById('randomizer')

randomizer.addEventListener('click', function(){
    shuffleArray(states)
})

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
   numbers.innerHTML += array
}


var array = [
34,5,25,'WI','SC','TN',23,'NY',32,19,'OK',2,'DC',27,'NC','MA',24,'CA','NH','NE','KS','MI',6,17,43,'MN',47,'WY',29,'HI','NM','MD',36,'IA','AZ','IN',12,14,10,'NV','GA',40,'CT','OR',44,'LA',41,'AR',1,30,'ID','NJ',33,22,11,'AK',20,18,21,50,'SD','MS','FL',48,'TX',7,'MT',45,42,'CO','AL',38,'VT','ME',46,35,51,31,26,4,39,'UT',9,'DE',37,'OH',16,'PA','ND','RI',3,'MO',13,8,49,15,'WV',"IL","KY","VA",28,"WA"]
1. write a method that takes the unordered array and returns a object literal;
obj ={
    1: 'AK',
    2: 'Al',
    3: "Ar",
    4: "Az"
} etc.

function separation(x){
    var strings = [];
    var numbers = [];
    for(let i =0;i<x.length;i++){
        if(typeof(x[i]) == 'string'){
            strings.push(x[i])
        }else {
            numbers.push(x[i])
        }
    }
    sorting(strings, numbers)
}

function sorting(x,y){
    x.sort()
    y.sort(function(a,b){
        return a-b;
    })
    objecting(x, y)
}

function objecting(strings, numbers){
    var obj = {};
    for(let i = 0;i<strings.length;i++){
        obj[numbers[i]] = strings[i]
    }
    console.log(obj);
}




