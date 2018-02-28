var edit = document.getElementsByClassName("edit")
var field = document.getElementsByClassName("field")
var count = 0;

for(let i=0;i<edit.length;i++){
	edit[i].addEventListener('click', function(){
		count += 1;
		showEdit(i)
	})
}

function showEdit(x){
		console.log(count)
	if(count % 2 !== 0){
		field[x].style.display = 'block'
	}else{
		field[x].style.display = 'none'
	}
	

}
