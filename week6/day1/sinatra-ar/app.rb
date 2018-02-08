require 'sinatra'
require 'sinatra/activerecord'

set :database, "sqlite3:textdb.sqlite3"

require './models'



