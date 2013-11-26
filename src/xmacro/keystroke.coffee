class Keystroke
  constructor: (@name) ->

  build: ->
    [
      "KeyStrPress #{@name}"
      "KeyStrRelease #{@name}"
    ]

module.exports = Keystroke
