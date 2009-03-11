class Owner < ActiveRecord::Base
  
  include UuidHelper
  
  def name
    "#{first_name} #{last_name}"
  end
end
