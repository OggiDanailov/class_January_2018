class BooksController < ApplicationController

	def index
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])
  end

  def create
    author = Author.find_by_id(params[:author_id])
    author.books.create(book_params)
    redirect_to root_path
  end


  private

 

  def book_params
    params.require(:book).permit(:name, :genre_ids)
  end



end
