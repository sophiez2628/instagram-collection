class RemoveUserIdFromCollections < ActiveRecord::Migration
  def change
    remove_column :collections, :user_id, :integer
  end
end
