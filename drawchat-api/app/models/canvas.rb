class Canvas < ApplicationRecord

	validates :name, uniqueness: true

end

