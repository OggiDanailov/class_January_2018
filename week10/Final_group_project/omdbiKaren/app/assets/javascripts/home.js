$.ajax({url: "http://www.omdbapi.com/?apikey=660a106a&",
					data: { s: 'love'  },   
					dataType: "json",   
					success: function(response){
						var a = response.Search[0]
						console.log(a)	
					}
		})