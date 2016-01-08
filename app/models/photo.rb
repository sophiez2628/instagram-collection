# == Schema Information
#
# Table name: photos
#
#  id            :integer          not null, primary key
#  url           :string           not null
#  link          :string           not null
#  tag_time      :integer          not null
#  collection_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Photo < ActiveRecord::Base
  belongs_to :collection,
    primary_key: :id,
    foreign_key: :collection_id,
    class_name: "Collection"
end
