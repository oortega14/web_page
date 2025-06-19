class ApplicationController < ActionController::API
  before_action :authenticate
  
  private
  
  def authenticate
    api_key = request.headers['X-API-Key']
    unless api_key && api_key == Rails.application.credentials.api_key
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end
