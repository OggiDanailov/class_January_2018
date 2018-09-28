//2. Implement an object model that allows you to store strings that represent a Photo. 
// Your model should include an Album object that can contain many Photo objects in its
// photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a specific
 // photo by the order it was added.
//  Each Photo should store the photo's file name and the location the photo was 
// taken in as strings. Create instances of each object defined to prove that your object
 // model works.

// 2.1/2 Extra Challenge: If you have time and are looking for an extra challenge try
//  using your solution to problem 2 to create a simple one page photo gallery.
//   This page should display  all photos stored in your photo gallery object. 
//   Try your best to implement modern design trends and if you are looking 
//   for even more then give a user the option to press a button to
//  animate the images on the page somehow. Have fun!

var imgName = document.getElementById("imgName")
var imgLocation = document.getElementById("imgLocation")
var imgUrl = document.getElementById("imgUrl")
var submit = document.getElementById('submit')	
var gallery = document.getElementsByClassName('gallery')[0]



submit.addEventListener('click', function(){
	album.addPhoto()
	album.listPhotos()

})	

function Photo(photoName, location, url){
		this.photoName = photoName;
		this.location = location;
		this.url = url
}


function Album(){
	this.count = 1
	this.photoList = [];
	this.naming = 'a';
	this.addPhoto = function(){
			var photo = "photo" + this.count
			photo = new Photo(imgName.value, imgLocation.value, imgUrl.value)
			this.photoList.push(photo)		
			this.count++;
	}

	this.listPhotos = function(){
		for(let i =0;i<this.photoList.length;i++){
			var images = document.createElement('div')
			images.style.width = '100px'
			images.style.height = '100px'
			images.style.border = "3px solid red"
			images.style.backgroundImage = "url(" + this.photoList[i].url + ")"
			images.style.backgroundSize = "100% 100%"
			gallery.appendChild(images)

		}
	}
}

var album = new Album()






