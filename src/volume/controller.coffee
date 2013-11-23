Commander   = require '../commander'
Volume      = require './'

commander = new Commander
volume    = new Volume

module.exports =
  get: (req, res) ->
    cmd = req.params.cmd
    commander.exec volume[cmd].call(this, req.query)
    res.send "Sent command: #{cmd}"
