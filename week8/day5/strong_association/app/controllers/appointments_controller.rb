class AppointmentsController < ApplicationController
	def index
		@appointments = Appointment.all
	end


	def assign
		a = Appointment.new(appointment_params)
		a.doctor_id = params[:doctor_id]
		if a.save
			redirect_to "/appointments"
		else 
			render "/doctors/#{doctor}"
		end
		
	end


	private

	def appointment_params
		params.require(:appointment).permit(:meeting, :doctor_id, :patient_id)
	end
end
