// Implement an object model that allows you to store strings that represent a Photo. 
// // Your model should include an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added.
//  Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.


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

function Photos(name, location){
		this.name = name;
		this.location = location
}

var album = new Album;
var p1 = new Photos('stupid', 'Kansas')
console.log(album)
console.log(p1)
album.addPhotos(p1)
console.log(album.listPhotos())




