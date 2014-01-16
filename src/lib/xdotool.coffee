module.exports = 
  moveRelative: (x, y) ->
    "xdotool mousemove_relative -- #{x} #{y}"

  leftClick: ->
    "xdotool click 1"

  rightClick: ->
    "xdotool click 3"

  doubleClick: ->
    "xdotool click 1 --repeat 2"
