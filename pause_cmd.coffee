class PauseCmd
  constructor: ->
    @keys = [
      'MotionNotify 465 350'
      'KeyStrPress space'
      'KeyStrRelease space'
    ]

module.exports = PauseCmd
