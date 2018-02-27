class RoomsController < ApplicationController
	
	def assign
		@subject = Subject.find(params[:id])
		room = Room.find(params[:id])
		p "this is the room #{room}"
		@subject.rooms << room
		redirect_to root_path
	end
end
