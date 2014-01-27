sinon         = require 'sinon'
expect        = require('chai').expect
SystemCtrl    = require '../../../src/controllers/system'

describe 'System Controller', ->
  systemCtrl = system = commander = req = res = null
  beforeEach ->
    req = body: level: '50'
    res = redirect: sinon.spy()
    commander = exec: sinon.spy()
    system = mute: sinon.stub(), setVolume: sinon.stub(), suspend: sinon.stub()

    systemCtrl = new SystemCtrl system, commander

  describe 'when calling mute', ->
    beforeEach ->
      system.mute.returns('system mute')
      systemCtrl.mute req, res

    it 'should call through to system', ->
      expect(system.mute.calledOnce).to.be.true
      expect(system.mute.calledWith(undefined)).to.be.true

    it 'should call through to the commander', ->
      expect(commander.exec.calledOnce).to.be.true
      expect(commander.exec.calledWith('system mute')).to.be.true

    it 'should redirect the user back to the root', ->
      expect(res.redirect.calledOnce).to.be.true
      expect(res.redirect.calledWith('/')).to.be.true

  describe 'when calling setVolume', ->
    beforeEach ->
      system.setVolume.returns('system setVolume')
      systemCtrl.setVolume req, res

    it 'should call through to system', ->
      expect(system.setVolume.calledOnce).to.be.true
      expect(system.setVolume.calledWith('50')).to.be.true

    it 'should call through to the commander', ->
      expect(commander.exec.calledOnce).to.be.true
      expect(commander.exec.calledWith('system setVolume')).to.be.true

    it 'should redirect the user back to the root', ->
      expect(res.redirect.calledOnce).to.be.true
      expect(res.redirect.calledWith('/')).to.be.true

  describe 'when calling suspend', ->
    beforeEach ->
      system.suspend.returns('system suspend')
      systemCtrl.suspend req, res

    it 'should call through to system', ->
      expect(system.suspend.calledOnce).to.be.true
      expect(system.suspend.calledWith(undefined)).to.be.true

    it 'should call through to the commander', ->
      expect(commander.exec.calledOnce).to.be.true
      expect(commander.exec.calledWith('system suspend')).to.be.true

    it 'should redirect the user back to the root', ->
      expect(res.redirect.calledOnce).to.be.true
      expect(res.redirect.calledWith('/')).to.be.true

