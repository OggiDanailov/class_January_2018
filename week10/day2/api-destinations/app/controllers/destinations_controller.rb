class DestinationsController < ApplicationController

	def index
		render json: Destination.all
	end

	def create
		Destination.create(destination_params)
		
	end

	def show
		render json: Destination.find(params[:id])
	end


	private

	def destination_params
		params.require(:destination).permit(:name, :description, :img_url)
	end


end
