class CreateQuestions < ActiveRecord::Migration
  def self.up
    create_table :questions do |t|
      t.integer :activity_id
      t.string :prompt
      t.string :default_response
      t.string :uuid

      t.timestamps
    end
  end

  def self.down
    drop_table :questions
  end
end
