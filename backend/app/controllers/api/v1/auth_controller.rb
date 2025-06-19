# In your auth_controller.rb
class Api::V1::AuthController < ApplicationController
  # Skip authentication for the login action
  skip_before_action :authenticate, only: [:login]
  
  def login
    # Use hardcoded credentials for single user scenario
    if params[:email] == Rails.application.credentials.admin[:email] && 
       params[:password] == Rails.application.credentials.admin[:password]
      render json: { api_key: Rails.application.credentials.api_key }
    else
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end
end