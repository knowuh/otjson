class Response < ActiveRecord::Base
  belongs_to :owner, :class_name => "Owner", :foreign_key => "owner_id" 
  belongs_to :question, :class_name => "Question", :foreign_key => "question_id"
  
  include UuidHelper
  
end
