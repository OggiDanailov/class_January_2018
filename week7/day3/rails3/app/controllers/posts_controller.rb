class PostsController < ApplicationController
	 before_action :authenticate, only: [:index, :create]
	 # this is a filter

	 def index
	 	@posts = Post.all
	 end
end
 