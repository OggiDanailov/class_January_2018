class ArticlesController < ApplicationController
  def index
  	@articles = Article.all
  end
  
  def new
  	@article = Article.new
  end

  def create
  	article = Article.new(article_params)
  	if article.save
  		redirect_to "/articles/#{article.id}"
  	else
  		render "/articles/new"
  	end
  end

  def show
  	@article = Article.find(params[:id])
  	@user = current_user
  end

  def update
  	article = Article.find(params[:id])
  	article = Article.new
  	if article.update(article_params)
  		redirect_to "/articles/#{article.id}"
  	else 
  		render "/"
  	end
  end

  private 
  def article_params
  	params.require(:article).permit(:title, :content)
  end
end
