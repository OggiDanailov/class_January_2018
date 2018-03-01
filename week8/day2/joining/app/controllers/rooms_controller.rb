class RoomsController < ApplicationController
	protect_from_forgery with: :exception, prepend: true
	
	def assign
		@subject = Subject.find(params[:id])
		room = Room.find(params[:roomid])
		# room = params[:roomid]
		# room = Room.find(params[:id])
		# p "this is the room #{room}"
		@subject.rooms << room
		redirect_to "/subjects/#{@subject.id}"
	end
end
