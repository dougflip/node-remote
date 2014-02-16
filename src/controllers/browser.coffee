Browser   = require '../lib/browser'
Commander = require '../lib/commander'
XMacro    = require '../lib/xmacroplay'

class BrowserCtrl
  constructor: (@browser = new Browser, @commander = new Commander, @xmacro = new XMacro) ->

  launch: (req, res) ->
    @commander.exec(
      @browser.buildCommand(req.body.url, req.body.flags)
    )
    res.redirect "/"

  closeTab: (req, res) ->
    @commander.exec(
      @xmacro.keyStr 'press:Control_L press:F4 release:Control_L release:F4'
    )
    res.redirect "/"

  nextTab: (req, res) ->
    @commander.exec(
      @xmacro.keyStr 'press:Control_L press:Tab release:Control_L release:Tab'
    )
    res.redirect "/"

  zoomIn: (req, res) ->
    @commander.exec(
      @xmacro.keyStr 'press:Control_L press:equal release:Control_L release:equal'
    )
    res.redirect "/"

  zoomOut: (req, res) ->
    @commander.exec(
      @xmacro.keyStr 'press:Control_L press:minus release:Control_L release:minus'
    )
    res.redirect "/"

  actualSize: (req, res) ->
    @commander.exec(
      @xmacro.keyStr 'press:Control_L press:0 release:Control_L release:0'
    )
    res.redirect "/"

module.exports = BrowserCtrl
