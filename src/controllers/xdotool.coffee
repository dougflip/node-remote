defaultXDoTool  = require '../lib/xdotool'
Commander       = require '../lib/commander'

class XDoToolCtrl
  constructor: (@commander = new Commander, @xdotool = defaultXDoTool) ->

  moveRelative: (req, res) ->
    @commander.exec @xdotool.moveRelative req.body.xrel, req.body.yrel
    res.json 200

  leftClick: (req, res) ->
    @commander.exec @xdotool.leftClick()
    res.json 200

  rightClick: (req, res) ->
    @commander.exec @xdotool.rightClick()
    res.json 200    

  doubleClick: (req, res) ->
    @commander.exec @xdotool.doubleClick()
    res.json 200

module.exports = XDoToolCtrl
