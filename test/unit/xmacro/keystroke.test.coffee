expect        = require('chai').expect
Keystroke     = require '../../../src/xmacro/keystroke'

describe "Keystroke", ->

  it "should build an array for the provided name", ->
    ks = new Keystroke 'space'
    result = ks.build()
    expect(result.length).to.equal 2
    expect(result).to.eql ['KeyStrPress space', 'KeyStrRelease space']
