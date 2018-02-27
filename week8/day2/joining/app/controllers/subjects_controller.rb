class SubjectsController < ApplicationController
protect_from_forgery with: :exception, prepend: true
	def index
		@subjects = Subject.all

	end


	def new
		@subject = Subject.new
	end

	def create
		subject = Subject.new(subject_params)
		if subject.save
			redirect_to root_path
		else
			render new_subject_path
		end
	end

	def show
		@subject = Subject.find(params[:id])
		@subject_rooms = @subject.rooms
		@rooms = Room.all
	end


	private

	def subject_params
		params.require(:subject).permit(:topic)
	end
end
