var whatever;

$.ajax({
	url: "http://www.omdbapi.com/?apikey=660a106a&",
					data: { s: 'love'  },   
					dataType: "json",   
					success: function(response){
						a = response.Search[0]
						whatever = function(){
							return a
						}
						
					}

		})


 
 $('#apply').live('click', function(event, data, status, xhr) {
    event.preventDefault();
    return $.ajax({
      url: '/posts/set_id',
      type: 'GET',
      data: {
        code: $('#user_id').val()
      },
      success: function(data, event, status, xhr) {
        $('#id_message').html(response);
        return $("#id_message").show();
      },
      error: function(event, data, status, xhr) {
        $('#id_message').html(response);
        return $("#id_message").show();
      }
    });
  });
  




