// $("button").click(function(){

// 	function loadDoc(){
// 	    $.ajax({url: "http://www.omdbapi.com/", success: function(result){
// 	        $("#div1").html(result);
// 	    }});
//     }
// });
$(document).ready(function(){


$(".something").click(function(){
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


})