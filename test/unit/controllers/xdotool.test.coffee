sinon					= require 'sinon'
expect				= require('chai').expect
XDoToolCtrl		= require '../../../src/controllers/xdotool'

describe 'XDoToolCtrl', ->
	xdotoolCtrl = xdotoolStub = xdotoolApi = commanderStub = commanderApi = req = resStub = resApi = null
	beforeEach ->
		xdotoolApi = moveRelative: (->), leftClick: (->), rightClick: (->), doubleClick: (->)
		commanderApi = exec: ->
		resApi = json: ->
	
	describe 'move mouse relative', ->
		beforeEach ->
			req = body: xrel: 1, yrel: -1
			resStub = sinon.stub(resApi, 'json')
			commanderStub = sinon.stub(commanderApi, 'exec')
			xdotoolStub = sinon.stub(xdotoolApi, 'moveRelative').returns("xdotool cmd")
			xdotoolCtrl = new XDoToolCtrl commanderApi, xdotoolApi

		it 'should provide the correct arguments to the xdotool module', ->
			xdotoolCtrl.moveRelative req, resApi
			expect(xdotoolStub.calledOnce).to.eql true
			expect(xdotoolStub.args[0][0]).to.eql 1
			expect(xdotoolStub.args[0][1]).to.eql -1

		it 'should call the commander with the result of xdotool', ->
			xdotoolCtrl.moveRelative req, resApi
			expect(commanderStub.calledOnce).to.eql true
			expect(commanderStub.args[0][0]).to.eql 'xdotool cmd'

		it 'should respond as JSON with a 200 status', ->
			xdotoolCtrl.moveRelative req, resApi
			expect(resStub.calledOnce).to.eql true
			expect(resStub.args[0][0]).to.eql 200

	# describe 'mouse left click', ->
	# 	it 'should call through to the xdotool module', ->
	# 		xdotoolCtrl.left

