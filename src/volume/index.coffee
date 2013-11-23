sys     = require 'sys'
exec    = require('child_process').exec

class Volume
  constructor: ->

  mute: ->
    buildVolumeCmd 0

  set: (options) ->
    buildVolumeCmd options.level

  buildVolumeCmd = (level) ->
    "pactl set-sink-volume 0 -- #{level}%"

module.exports = Volume
