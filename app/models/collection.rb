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
end
