class BlogsController < ApplicationController

	def index
		@blog = Blog.all
	end

	def new
		@blog = Blog.new
	end

	def create
		user = current_user
		blog = Blog.new(blog_params)
		blog.user_id = user.id
		if blog.save
			redirect_to '/blogs'
		else
			render '/blogs/new'
		end
	end

	def show
		@blog = Blog.find(params[:id])
	end

	def edit
		@blog = Blog.find(params[:id])
	end

	def update
		blog = Blog.find(params[:id])
		if blog.update(blog_params)
			redirect_to '/blogs/#{blog.id}'
		else
			render '/blogs/#{blog.id}/edit'
		end
	end

	def destroy
		@blog = Blog.find(params[:id])
		@blog.destroy
		redirect_to '/blogs'
	end

	private

	def blog_params
		params.require(:blog).permit(:title, :content)
	end


end
