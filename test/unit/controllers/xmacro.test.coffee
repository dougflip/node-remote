sinon         = require 'sinon'
expect        = require('chai').expect
XMacroCtrl    = require '../../../src/controllers/xmacro'

describe 'XMacroCtrl', ->
  xmacroCtrl = xmacro = commander = req = res = null
  beforeEach ->
    req = body: keys: 'a', text: 'text'
    res = redirect: sinon.spy()
    commander = exec: sinon.spy()
    xmacro = keyStr: sinon.stub(), string: sinon.stub()

    xmacroCtrl = new XMacroCtrl xmacro, commander

  describe 'when calling keys', ->
    beforeEach ->
      xmacro.keyStr.returns('xmacro keys')
      xmacroCtrl.keys req, res

    it 'should call through to xmacro', ->
      expect(xmacro.keyStr.calledOnce).to.be.true
      expect(xmacro.keyStr.calledWith('a')).to.be.true

    it 'should call through to the commander', ->
      expect(commander.exec.calledOnce).to.be.true
      expect(commander.exec.calledWith('xmacro keys')).to.be.true

    it 'should redirect the user back to the root', ->
      expect(res.redirect.calledOnce).to.be.true
      expect(res.redirect.calledWith('/')).to.be.true

  describe 'when calling text', ->
    beforeEach ->
      xmacro.string.returns('xmacro string')
      xmacroCtrl.text req, res

    it 'should call through to xmacro', ->
      expect(xmacro.string.calledOnce).to.be.true
      expect(xmacro.string.calledWith('text')).to.be.true

    it 'should call through to the commander', ->
      expect(commander.exec.calledOnce).to.string.true
      expect(commander.exec.calledWith('xmacro string')).to.be.true

    it 'should redirect the user back to the root', ->
      expect(res.redirect.calledOnce).to.be.true
      expect(res.redirect.calledWith('/')).to.be.true
