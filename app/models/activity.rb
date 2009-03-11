class Activity < ActiveRecord::Base
  has_many :questionss, :class_name => "questions", :foreign_key => "activity_id"
  belongs_to :owner, :class_name => "Owner", :foreign_key => "owner_id"
  
  include UuidHelper
  include CssLabelingAware
end
