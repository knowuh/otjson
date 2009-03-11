class CreateOwners < ActiveRecord::Migration
  def self.up
    create_table :owners do |t|
      t.string :first_name
      t.string :last_name
      t.string :uuid

      t.timestamps
    end
  end

  def self.down
    drop_table :owners
  end
end
