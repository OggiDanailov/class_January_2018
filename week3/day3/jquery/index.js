// navbar menu functionality


// $(".wrap-burger").click(function(){
// 	$('ul').slideToggle()
// 	$("ul ul").css('display', 'none')
// }) 

// $("ul li").click(function(){
// 	$("ul ul").slideUp();
// 	$(this).find("ul").slideToggle();
// })





// jquery
$(".box").click(function(){
	console.log('this is the Jquery version')
})

// var boxes = document.getElementsByClassName('box')

// for(let i =0;i<boxes.length;i++){
// 	boxes[i].addEventListener('click', function(){
// 		console.log('this is the vanilla version')
// 	})
// }

$(".one").css("background", "red")
$(".two").css("box-shadow", "5px 5px 5px black")

$(".one").click(function(){
	$(".one").hide(1000, showing);
})

function showing(){
	$(".one").show(1000)
	
}

$(".three").click(function(){
	$(this).css("position", "relative")
	$(this).animate({
		left: "250px",
		width: "150px",
		top: "-140px"
	}, "slow")
	$(this).css("background-color", "red")
	$(this).css("box-shadow", "10px 10px 10px black")
})




