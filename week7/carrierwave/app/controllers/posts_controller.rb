class PostsController < ApplicationController
  def index
  	@posts = Post.all
  end

  def new
  	@post = Post.new
  end

  def create
    post = Post.new(post_params)
    if post.save
      
      redirect_to "/posts/#{post.id}"
    else
      render "/posts/new"
    end

  end

  def show
    @post = Post.find(params[:id])
  end

  



  def post_params
  	params.require(:post).permit(:avatar, :content, :remove_avatar)
 	end
end
