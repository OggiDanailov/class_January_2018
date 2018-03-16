class HomeController < ApplicationController
  def index
  	Tmdb::Api.key(ENV['TMDB_API_KEY'])
  	@movie = Tmdb::Movie.find("hate")
  end




end
