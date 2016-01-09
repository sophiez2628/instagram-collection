class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :url, null: false
      t.string :link, null: false
      t.integer :tag_time, null: false
      t.integer :collection_id, null: false
      t.timestamps null: false
    end
  end
end
