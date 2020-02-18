var images = document.getElementsByClassName("image")
var leftButton = document.getElementById("left")
var rightButton = document.getElementById("right")
var text = document.getElementById('text')
var currentNumber = 0;

var imageArray = [
{name: "sofia",
 url: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2019/10/14185703/Ensemble-of-three-Socialist-Classicism-edifices-in-Sofia.jpg"},
 {name: "belgrade",
 url: "https://lp-cms-production.imgix.net/features/2017/09/Belgrade-Knez-Mihailova-street-af958c3aa30c.jpg?w=1200&sharp=10&vib=20"},
 {name: 'bucharest',
 url:  "https://www.romania-insider.com/sites/default/files/styles/article_large_image/public/2019-02/bucharest_universitatii_square_-_shutterstock.jpg"}, 
 {name: 'budapest',
 url: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Hungary/fisherman-bastion-budapest-guide.jpg"},
 {name: "Bratislava",
 url: "https://static01.nyt.com/images/2019/11/22/multimedia/22SP-BRATISLAVA-INYT-1/merlin_164233158_6b25a2a1-5004-46cc-add6-cfb72c427462-superJumbo.jpg"},
 {name: "Zagreb",
 url:  "https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Croatia-Zagreb-546182488-Dreamer4787-copy.jpg"}
 ]
 
for(let i = 0;i<imageArray.length;i++) {
	images[i].style.backgroundImage = "url(" + imageArray[i].url + ")"
}



function displayImage (number) {
	for(let i = 0;i<images.length; i++) {
		images[i].style.display = 'none'
	}
	images[number].style.display = 'block'
	text.innerHTML = imageArray[number].name
}


	leftButton.addEventListener("click", function () {
		currentNumber = currentNumber - 1
		if(currentNumber < 0 ) {
			currentNumber = imageArray.length-1
		}
		displayImage(currentNumber)
	})

	rightButton.addEventListener("click", function() {
		currentNumber = currentNumber + 1;
		if(currentNumber > imageArray.length-1) {
			currentNumber = 0
		}
		displayImage(currentNumber)
	})




window.onload = displayImage(currentNumber)


