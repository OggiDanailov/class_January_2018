class ChatroomsController < ApplicationController



	private

	def chatroom_params
		params.require(:chatroom).permit(:debator_id, :joiner_id)
	end
end
