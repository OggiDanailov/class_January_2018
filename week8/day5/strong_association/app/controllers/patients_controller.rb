class PatientsController < ApplicationController

	def index
		@patients = Patient.all
	end

	def new
		@patient = Patient.new
	end

	def create
		p = Patient.new(patient_params)
		if p.save
			redirect_to "/patients"
		else 
			render "/patients/new"
		end
	end

private

	def patient_params
		params.require(:patient).permit(:name)
	end
end
