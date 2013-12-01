expect        = require('chai').expect
keystroke     = require '../../../src/xmacro/keystroke'

describe "Keystroke", ->

  it "should return null if no input is provided", ->
    result = keystroke.create()
    expect(result).to.eql null

  it "should create a press only keystroke", ->
    result = keystroke.create 'press:space'
    expect(result).to.eql ['KeyStrPress space']

  it "should create a release only keystroke", ->
    result = keystroke.create 'release:space'
    expect(result).to.eql ['KeyStrRelease space']

  it "should create a full press and release keystroke", ->
    result = keystroke.create 'space'
    expect(result).to.eql ['KeyStrPress space', 'KeyStrRelease space']
