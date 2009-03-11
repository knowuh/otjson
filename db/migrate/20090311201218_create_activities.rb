class CreateActivities < ActiveRecord::Migration
  def self.up
    create_table :activities do |t|
      t.integer :owner_id
      t.string :name
      t.text :xhtml
      t.string :uuid

      t.timestamps
    end
  end

  def self.down
    drop_table :activities
  end
end
