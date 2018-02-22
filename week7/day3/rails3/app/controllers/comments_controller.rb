class CommentsController < ApplicationController

# create a new comment matched to post
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.new(comment_params)
    @comment.user_id = current_user.id
    @comment.save
    redirect_to @post
  end



  private
  def comment_params
    params.require(:comment).permit(:body)
  end

end
