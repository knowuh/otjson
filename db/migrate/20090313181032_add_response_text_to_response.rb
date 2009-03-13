class AddResponseTextToResponse < ActiveRecord::Migration
  def self.up
    add_column :responses, :response_text, :string
  end

  def self.down
    remove_column :responses, :response_text
  end
end
