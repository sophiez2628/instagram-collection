# == Schema Information
#
# Table name: collections
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Collection < ActiveRecord::Base
  has_many :photos,
    primary_key: :id,
    foreign_key: :collection_id,
    class_name: "Photo"
end
