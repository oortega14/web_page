User.find_or_create_by(email: 'ortegaoscar14@gmail.com') do |user|
  user.name = 'Oscar Ortega'
  user.password = Rails.application.credentials.dig(:default_user, :password) || 'default_password'
  user.active = true
end

puts "Usuario creado/actualizado correctamente"