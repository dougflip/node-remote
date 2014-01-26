sinon					= require 'sinon'
expect				= require('chai').expect
XDoToolCtrl		= require '../../../src/controllers/xdotool'

describe 'XDoToolCtrl', ->
	xdotoolCtrl = xdotool = commander = req = res = null
	beforeEach ->
		xdotool = moveRelative: sinon.stub(), leftClick: sinon.stub(), rightClick: sinon.stub(), doubleClick: sinon.stub()
		commander = exec: sinon.stub()
		res = json: sinon.stub()
		xdotoolCtrl = new XDoToolCtrl commander, xdotool
	
	describe 'move mouse relative', ->
		beforeEach ->
			req = body: xrel: 1, yrel: -1
			xdotool.moveRelative.returns('xdotool cmd')
			xdotoolCtrl.moveRelative req, res

		it 'should provide the correct arguments to the xdotool module', ->
			expect(xdotool.moveRelative.calledOnce).to.be.true
			expect(xdotool.moveRelative.calledWith(1, -1)).to.be.true

		it 'should call the commander with the result of xdotool', ->
			expect(commander.exec.calledOnce).to.be.true
			expect(commander.exec.calledWith('xdotool cmd')).to.be.true

		it 'should respond as JSON with a 200 status', ->
			expect(res.json.calledOnce).to.be.true
			expect(res.json.calledWith(200)).to.be.true

	describe 'mouse left click', ->
		beforeEach ->
			xdotool.leftClick.returns('xdotool left cmd')
			xdotoolCtrl.leftClick req, res

		it 'should call through to the xdotool module', ->
			expect(xdotool.leftClick.calledOnce).to.be.true

		it 'should call the commander with the result of xdotool', ->
			expect(commander.exec.calledOnce).to.be.true
			expect(commander.exec.calledWith('xdotool left cmd')).to.be.true

		it 'should respond as JSON with 200 status', ->
			expect(res.json.calledOnce).to.be.true
			expect(res.json.calledWith(200)).to.be.true

	describe 'mouse right click', ->
		beforeEach ->
			xdotool.rightClick.returns('xdotool right cmd')
			xdotoolCtrl.rightClick req, res

		it 'should call through to the xdotool module', ->
			expect(xdotool.rightClick.calledOnce).to.be.true

		it 'should call the commander with the result of xdotool', ->
			expect(commander.exec.calledOnce).to.be.true
			expect(commander.exec.calledWith('xdotool right cmd')).to.be.true

		it 'should respond as JSON with 200 status', ->
			expect(res.json.calledOnce).to.be.true
			expect(res.json.calledWith(200)).to.be.true

	describe 'mouse double click', ->
		beforeEach ->
			xdotool.doubleClick.returns('xdotool double cmd')
			xdotoolCtrl.doubleClick req, res

		it 'should call through to the xdotool module', ->
			expect(xdotool.doubleClick.calledOnce).to.be.true

		it 'should call the commander with the result of xdotool', ->
			expect(commander.exec.calledOnce).to.be.true
			expect(commander.exec.calledWith('xdotool double cmd')).to.be.true

		it 'should respond as JSON with 200 status', ->
			expect(res.json.calledOnce).to.be.true
			expect(res.json.calledWith(200)).to.be.true

