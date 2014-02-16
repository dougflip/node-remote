sinon       = require 'sinon'
expect      = require('chai').expect
BrowserCtrl = require '../../../src/controllers/browser'

describe 'Browser Controller', ->
  sut = browser = commander = xmacro = req = res = null
  beforeEach ->
    browser = buildCommand: sinon.stub()
    browser.buildCommand.returns('browser')
    commander = exec: sinon.stub()
    xmacro = keyStr: sinon.stub()
    xmacro.keyStr.returns('keystr')
    req = body: url: 'url', flags: {}
    res = redirect: sinon.stub()
    sut = new BrowserCtrl browser, commander, xmacro

  describe 'launch', ->
    it 'should call through to browser', ->
      sut.launch(req, res)
      expect(browser.buildCommand.calledOnce).to.be.true
      expect(browser.buildCommand.calledWith('url', {})).to.be.true

    it 'should call through to commander', ->
      sut.launch(req, res)
      expect(commander.exec.calledOnce).to.be.true
      expect(commander.exec.calledWith('browser')).to.be.true

    it 'should redirect to /', ->
      sut.launch(req, res)
      expect(res.redirect.calledOnce).to.be.true
      expect(res.redirect.calledWith('/')).to.be.true

  describe 'closeTab', ->
    it 'should call through to xmacro', ->
      sut.closeTab(req, res)
      expect(xmacro.keyStr.calledOnce).to.be.true

    it 'should call through to commander', ->
      sut.closeTab(req, res)
      expect(commander.exec.calledOnce).to.be.true
      expect(commander.exec.calledWith('keystr')).to.be.true

    it 'should redirect to /', ->
      sut.closeTab(req, res)
      expect(res.redirect.calledOnce).to.be.true
      expect(res.redirect.calledWith('/')).to.be.true

  describe 'nextTab', ->
    it 'should call through to xmacro', ->
      sut.nextTab(req, res)
      expect(xmacro.keyStr.calledOnce).to.be.true

    it 'should call through to commander', ->
      sut.nextTab(req, res)
      expect(commander.exec.calledOnce).to.be.true
      expect(commander.exec.calledWith('keystr')).to.be.true

    it 'should redirect to /', ->
      sut.nextTab(req, res)
      expect(res.redirect.calledOnce).to.be.true
      expect(res.redirect.calledWith('/')).to.be.true

  describe 'zoomIn', ->
    it 'should call through to xmacro', ->
      sut.zoomIn(req, res)
      expect(xmacro.keyStr.calledOnce).to.be.true

    it 'should call through to commander', ->
      sut.zoomIn(req, res)
      expect(commander.exec.calledOnce).to.be.true
      expect(commander.exec.calledWith('keystr')).to.be.true

    it 'should redirect to /', ->
      sut.zoomIn(req, res)
      expect(res.redirect.calledOnce).to.be.true
      expect(res.redirect.calledWith('/')).to.be.true

  describe 'zoomOut', ->
    it 'should call through to xmacro', ->
      sut.zoomOut(req, res)
      expect(xmacro.keyStr.calledOnce).to.be.true

    it 'should call through to commander', ->
      sut.zoomOut(req, res)
      expect(commander.exec.calledOnce).to.be.true
      expect(commander.exec.calledWith('keystr')).to.be.true

    it 'should redirect to /', ->
      sut.zoomOut(req, res)
      expect(res.redirect.calledOnce).to.be.true
      expect(res.redirect.calledWith('/')).to.be.true

  describe 'actualSize', ->
    it 'should call through to xmacro', ->
      sut.actualSize(req, res)
      expect(xmacro.keyStr.calledOnce).to.be.true

    it 'should call through to commander', ->
      sut.actualSize(req, res)
      expect(commander.exec.calledOnce).to.be.true
      expect(commander.exec.calledWith('keystr')).to.be.true

    it 'should redirect to /', ->
      sut.actualSize(req, res)
      expect(res.redirect.calledOnce).to.be.true
      expect(res.redirect.calledWith('/')).to.be.true
