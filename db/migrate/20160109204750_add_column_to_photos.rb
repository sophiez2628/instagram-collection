class AddColumnToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :videos, :boolean
  end
end
