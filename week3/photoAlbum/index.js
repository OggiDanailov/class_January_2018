// Implement an object model that allows you to store strings that represent a Photo. 
// // Your model should include an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added.
//  Each Photo should store the photo's file name and the location the photo was 
// taken in as strings. Create instances of each object defined to prove that your object model works.


// Extra Challenge: If you have time and are looking for an extra challenge try using your 
// solution to problem 2 to create a simple one page photo gallery. This page should display 
// all photos stored in your photo gallery object. Try your best to implement modern design 
// trends and if you are looking for even more then give a user the option to press a button to
//  animate the images on the page somehow. Have fun!


var button = document.getElementById('button')

function Album(){
	this.photoList = [];

	this.addPhotos = function(photo){
		this.photoList.push(photo)
	}

	this.listPhotos = function(){
		for(let i=0;i<this.photoList.length;i++){
			this.photoList[i]
		}
	}

	this.lastPhoto = function(photo){
		photo[photo.length - 1]
	}

}

function Photos(name, location, url){
		this.name = name;
		this.location = location;
		this.url = url;
}

var album = new Album;
var p1 = new Photos('Plovdiv', 'Bulgaria', "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Plovdiv_view.jpg/300px-Plovdiv_view.jpg");
var p2 = new Photos('whatever', 'New Mexico');
album.addPhotos(p1)
album.addPhotos(p2)

button.addEventListener("click", function(){
	frame()

})

function frame(){
	var img = document.createElement('div');
	img.style.border = "4px solid black"
	img.style.width = "200px"
	img.style.height = "200px"
	img.id = 'img';
	img.style.backgroundImage = "url(" + album.photoList[0].url + ")"
	document.body.appendChild(img)
}









