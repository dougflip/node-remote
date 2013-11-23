class PauseCmd
  constructor: ->
    @keys = [
      'MotionNotify 465 350' # Docs say this emulates mouse movement - do I need this?
      'KeyStrPress space'
      'KeyStrRelease space'
    ]

module.exports = PauseCmd
