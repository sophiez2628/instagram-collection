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
#  videos        :boolean
#

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
