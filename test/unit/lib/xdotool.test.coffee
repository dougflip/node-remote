expect	= require('chai').expect
xdotool = require '../../../src/lib/xdotool'

describe 'xdotool', ->
	describe 'moving the mouse relative', ->
		it 'should handle positive coordinates', ->
			result = xdotool.moveRelative 1, 1
			expect(result).to.eql "xdotool mousemove_relative -- 1 1"

		it 'should handle negative coordinates', ->
			result = xdotool.moveRelative -1, -1
			expect(result).to.eql "xdotool mousemove_relative -- -1 -1"

	describe 'clicking the mouse', ->
		it 'should perform a left click', ->
			result = xdotool.leftClick()
			expect(result).to.eql 'xdotool click 1'

		it 'should perform a right click', ->
			result = xdotool.rightClick()
			expect(result).to.eql 'xdotool click 3'

		it 'should perform a double click', ->
			result = xdotool.doubleClick()
			expect(result).to.eql 'xdotool click 1 --repeat 2'