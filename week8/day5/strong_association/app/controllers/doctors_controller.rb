class DoctorsController < ApplicationController
	def index
		@doctors  = Doctor.all
	end

	def new
		@doctor = Doctor.new
	end

	def create
		doctor = Doctor.new(doctor_params)
		if doctor.save
			redirect_to "/"
		else
			render "/doctors/new"
		end
	end

	def show
		@doctor = Doctor.find(params[:id])
		@patients = Patient.all
	end


	private

	def doctor_params
		params.require(:doctor).permit(:name)
	end
end
