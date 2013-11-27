Commander   = require '../commander'
Volume      = require './'

commander = new Commander
volume    = new Volume

module.exports =
  post: (req, res) ->
    cmd = req.params.cmd
    commander.exec volume[cmd].call(this, req.body.options)
    res.redirect '/'
