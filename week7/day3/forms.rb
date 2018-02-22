# 1. form_tag 
# it takes an argument an url ('/search') and a method

 <%= form_tag("/search", method: "get") do %>
    <%= label_tag(:q, "Search for:") %>
    <%= text_field_tag(:q) %>
    <%= submit_tag("Search") %>
  <% end %>


  # This creates the form in plain html:

  <form  action="/search" method="get">
    <label for="q">Search for:</label>
    <input id="q" name="q" type="text" />
    <input name="commit" type="submit" value="Search" />
  </form>


  # 2. form_for
  # it takes a model as an arugment; @user will submit to the correct URL for creating a User. 
#   The best part about form_for is that if you just pass it a model object like @article in the example above, 
#   Rails will check for you if the object has been saved yet. If it’s a new object, it will send the form to your 
#   #create action. If the object has been saved before, so we know that we’re editing an existing object, 
#   it will send the object to your #update action instead. This is done by automatically generating the correct URL 
# when the form is created. 

  <%= form_for @article do |f| %>
    <%= f.text_field :title %>
    <%= f.text_area :body, size: "60x12" %>
    <%= f.submit "Create" %>
  <% end %>

  # converts into:
   <form accept-charset="UTF-8" action="/articles/create" method="post">
    <input id="article_title" name="article[title]" type="text" />
    <textarea id="article_body" name="article[body]" cols="60" rows="12"></textarea>
    <input name="commit" type="submit" value="Create" />
  </form>