class Pokemon2{
	constructor(number){
		this.name;
		this.url;
		this.getAjax(number)
	}

	getAjax(x){
		var that = this;
		$.ajax({url: " https://fizal.me/pokeapi/api/" + x + ".json",
		data: {},
		dataType: "json",
		success:function(response){
			whatever(response);}
		})
	}

	function whatever(x){
		
	}
}