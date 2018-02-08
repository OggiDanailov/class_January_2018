require 'sinatra'
require 'sendgrid-ruby'


get '/' do 
erb :index	
end


get '/contact' do
@email = params[:email]
@title = params[:title]
@content = params[:content]




from = SendGrid::Email.new(email: @email)
to = SendGrid::Email.new(email: 'ogidan@abv.bg')
subject = @title
content = SendGrid::Content.new(type: 'text/plain', value: @content)
mail = SendGrid::Mail.new(from, subject, to, content)

sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
response = sg.client.mail._('send').post(request_body: mail.to_json)
# puts response.status_code
# puts response.body
# puts response.headers

erb :thanks

end