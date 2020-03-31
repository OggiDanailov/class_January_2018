// $("button").click(function(){

// 	function loadDoc(){
// 	    $.ajax({url: "http://www.omdbapi.com/", success: function(result){
// 	        $("#div1").html(result);
// 	    }});
//     }
// });


$(document).ready(function(){
 

$(".something").click(function(){
		naming()
		$(".whatever").animate({
			opacity: '0.5',
			width: '70%'
		}, 1000)
		$(".whatever").slideDown('slow')
		$(".whatever").css({
			border: '2px solid red',
			backgroundColor: 'teal'
		})

})

setTimeout(function(){
	$(".whatever").fadeOut(3000);
}, 3000)

// example of class targeting in both 


function naming(){
	$(".name").html("hello Jquery")
}


// var name = document.getElementsByClassName("name")

// function naming(){
// 	for(var i = 0;i<name.length;i++){
// 		name[i].innerHTML = "hellow Jquery"
// 	}
// }

// toggling = here I can use 'this' which will refer to box
$("#box").click(function(){
	$("#box2").toggleClass("box2-toggle")
	// $(this).css('background-color', 'yellow');
	// $("h2").toggle()
})







})


// in javascript toggling
// var box = document.getElementById('box')

// box.addEventListener("click", function(){
// 	box.classList.toggle('box2-toggle')
// })











