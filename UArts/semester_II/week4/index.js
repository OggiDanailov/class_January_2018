// how to target elements in jquery:

// for(let i = 0; i < numbers.length; i++) {
// 	numbers[i].addEventListener("click", function(e) {
// 		console.log(e.target.innerHTML)
// 	})
// }


// $(document).ready(function() {
// 	$(".numbers").click(function(e) {
// 		console.log(e.target.innerHTML)
// 	})
// })

// DOM text manipulation


$(document).ready(function() {
$(".text").html("this is whatever")

// style manipulation

$("#button").click(changeLook)
$("#button").click(doAnimation)

function changeLook () {
	$(".text").css({
	color: "red",
	fontSize: "23px",
	padding: "14px",
	boxShadow: "3px 3px 3px black"
	})
}

$(".text").click(function() {
	$("#circle").toggle()
})

function doAnimation () {
	$("#animation-element").css({
		width: "200px",
		height: "200px",
		backgroundColor: "red",
		margin: "30px",
		position: 'relative'
	})
	$("#circle").animate({
		width: 'toggle',
		height: 'toggle'
	}, 2000)
	$("#animation-element").animate({
		left: "+=50px",
		opacity: "0.4"
	}, 4000, function () {
		$(".text").css({backgroundColor: 'blue'})
		
	})
}


})



