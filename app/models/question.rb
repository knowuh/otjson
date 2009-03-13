class Question < ActiveRecord::Base
  belongs_to :activity, :class_name => "Activity", :foreign_key => "activity_id"
  belongs_to :owner, :class_name => "Owner", :foreign_key => "owner_id"
  has_many :responses, :class_name => "Response", :foreign_key => "question_id"
  include UuidHelper
  
end
