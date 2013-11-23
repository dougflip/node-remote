class Volume
  constructor: ->

  # TODO: I am guessing there is a real "mute" command I can call
  mute: ->
    buildVolumeCmd 0

  set: (options) ->
    buildVolumeCmd options.level

  buildVolumeCmd = (level) ->
    level = 0 if level < 0
    level = 100 if level > 100
    "pactl set-sink-volume 0 -- #{level}%"

module.exports = Volume
