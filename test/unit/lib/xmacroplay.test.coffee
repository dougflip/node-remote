expect        = require('chai').expect
XMacroPlay    = require '../../../src/lib/xmacroplay'

describe "XMacroPlay", ->
  xmacroplay = null

  beforeEach ->
    xmacroplay = new XMacroPlay

  describe "when guarding against improper commands", ->
    it "should return null for undefined input", ->
      result = xmacroplay.keyStr()
      expect(result).to.equal null

    it "should return null for null input", ->
      result = xmacroplay.keyStr null
      expect(result).to.equal null

    it "should return null for an empty command", ->
      result = xmacroplay.keyStr ''
      expect(result).to.equal null

    it "should return null for an invalid string input", ->
      result = xmacroplay.string null
      expect(result).to.equal null

  describe "when creating valid commands", ->
    it "should create a single keypress and keyrelease", ->
      result = xmacroplay.keyStr 'space'
      expect(result).to.equal "printf \"KeyStr space\" | xmacroplay \"$DISPLAY\""

    it "should create a sequence of keystrokes", ->
      result = xmacroplay.keyStr 'press:alt press:F4 release:F4 release:alt'
      expect(result).to.equal "printf \"KeyStrPress alt\\nKeyStrPress F4\\nKeyStrRelease F4\\nKeyStrRelease alt\" | xmacroplay \"$DISPLAY\""

    it "should create a valid string command", ->
      result = xmacroplay.string("Search this string")
      expect(result).to.eql "printf \"String Search this string\" | xmacroplay \"$DISPLAY\""
