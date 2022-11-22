class Cheers < ActiveRecord::Migration[7.0]
  def change
    create_table :cheers do |t|
      t.string :greeting
      t.timestamps
    end
  end
end
