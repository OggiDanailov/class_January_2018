class PostsController < ApplicationController
  def index
  	@posts = Post.all
  end

  def new
  	@post = Post.new
  end

  def create
  	@post = Post.new(post_params)
    respond_to do |format|
    	if @post.save
        format.html { redirect_to @post}
    		format.js 
    	else
        format.html {render :new}
    		format.js
    	end
    end
  end

  def show
  	@post = Post.find(params[:id])
  end

  def edit
  	@post = Post.find(params[:id])
  end

  def update
  	post = Post.find(params[:id])
  	if post.update(post_params)
  		redirect_to '/'
  	else
  		render "/posts/#{post.id}"
  	end
  end

  def destroy
  	post = Post.find(params[:id])
  	post.destroy
  		respond_to do |format| 
        format.js 
      end
  end


  def whatever 
    t = params[:t]
    c = params[:c]
    @p = Post.new(title: t, content: c)
    respond_to do |format|
      if @p.save
          format.html { redirect_to "/", notice: 'Home was successfully created.' }
          format.js
      end
    
    end
  end



  def post_params
  	params.require(:post).permit(:title, :content)
  end	
end
