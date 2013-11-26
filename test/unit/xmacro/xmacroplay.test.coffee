expect        = require('chai').expect
XMacroPlay    = require '../../../src/xmacro/xmacroplay'

describe "XMacroPlay", ->

  xmacroplay = null

  beforeEach ->
    xmacroplay = new XMacroPlay

  describe "when guarding against improper commands", ->
    it "should return null for undefined input", ->
      result = xmacroplay.buildCommand()
      expect(result).to.equal null

    it "should return null for null input", ->
      result = xmacroplay.buildCommand null
      expect(result).to.equal null

    it "should return null for an empty command", ->
      result = xmacroplay.buildCommand keys: []
      expect(result).to.equal null

  describe "when creating valid commands", ->
    it "should create a command with proper newlines", ->
      keys = ['space']
      result = xmacroplay.buildCommand keys
      expect(result).to.equal "printf \"KeyStrPress space\\nKeyStrRelease space\" | xmacroplay \"$DISPLAY\""