buildVolumeCmd = (level) ->
  level = 0 if level < 0
  level = 100 if level > 100
  "pactl set-sink-volume 0 -- #{level}%"

module.exports =
  mute: ->
    buildVolumeCmd 0

  setVolume: (level) ->
    buildVolumeCmd level

  suspend: ->
    'dbus-send --system --print-reply --dest="org.freedesktop.UPower" /org/freedesktop/UPower org.freedesktop.UPower.Suspend'
