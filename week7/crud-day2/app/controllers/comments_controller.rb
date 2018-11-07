class CommentsController < ApplicationController
 
 def index 	
  @comments = Comment.all
 end

  def new
  end

  def create
  	@blog = Blog.find(params[:blog_id])
  	@comment = @blog.comments.create(comment_params)
  	redirect_to blog_path(@blog)
  end

  def show
  	@blog = Blog.find(params[:blog_id])
    @comment = Comment.find(params[:id])
  end

  def edit
    @blog = Blog.find(params[:blog_id])
    @comment = Comment.find(params[:id])
  end

  def update
    @blog = Blog.find(params[:blog_id])
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      redirect_to "/blogs/#{@blog.id}/comments/#{@comment.id}"
    else 
      render "/blogs/new"
    end
  end



  private
 def comment_params
 	params.require(:comment).permit(:content, :blog_id)
 end


end
