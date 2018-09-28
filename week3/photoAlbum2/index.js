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
var mainImage = document.getElementById('big-image')



	

function Photo(photoName, location, url){
		this.photoName = photoName;
		this.location = location;
		this.url = url
}


function Album(){
	this.photoList = [];
	this.bigImage;
	

	this.addPhoto = function(){
			var photo = "photo" + this.count
			photo = new Photo(imgName.value, imgLocation.value, imgUrl.value)
			this.photoList.push(photo)		
	}

	this.listPhotos = function(){
		// for(let i =0;i<this.photoList.length;i++){
			this.images = document.createElement('div')
			this.images.style.width = '100px'
			this.images.style.height = '100px'
			this.images.style.border = "3px solid red"
			this.images.style.margin = '5px'
			this.images.style.backgroundImage = "url(" + this.photoList[this.photoList.length-1].url + ")"
			this.bigImage = "url(" + this.photoList[this.photoList.length-1].url + ")"
			this.images.style.backgroundSize = "100% 100%"
			this.images.className = 'images'
			gallery.appendChild(this.images)

			var title = document.createElement('div')
			title.style.width = '70%'
			title.style.margin = '10px auto'
			// title.style.border = '1px solid'
			title.style.textAlign = 'center'
			title.innerHTML = this.photoList[this.photoList.length-1].photoName
			gallery.appendChild(title)

			var location = document.createElement('div')
			location.style.width = '70%'
			location.style.margin = '2px auto'
			location.style.textAlign = 'center'
			location.style.fontWeight = 'bold'
			currentImage = this.photoList[this.photoList.length-1].photoName
			location.innerHTML = this.photoList[this.photoList.length-1].location
			gallery.appendChild(location)
				this.moveImage(this.images,this.bigImage)
		// }
	}

	this.moveImage = function(x, y){
		x.addEventListener('click', function(){
			mainImage.style.backgroundImage = y;
			mainImage.style.backgroundSize = '100% 100%'
		})
	}

}

submit.addEventListener('click', function(){
	album.addPhoto()
	album.listPhotos()
})


var album = new Album()






