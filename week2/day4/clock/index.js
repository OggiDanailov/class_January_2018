var hour = document.getElementById('hour')
var minute =  document.getElementById('minute')
var second =  document.getElementById('second')



function timing(){
	var d = new Date();
	hour.innerHTML = d.getHours();
	minute.innerHTML = d.getMinutes();
	second.innerHTML = d.getSeconds();
	if(d.getSeconds()<10){
		second.innerHTML = '0' +d.getSeconds();  
	}
	document.body.style.background = '#' + d.getHours()+d.getMinutes()+d.getSeconds(); 
}



setInterval(timing, 1000)








