controller    = require './controller'

module.exports =
  configure: (app) ->
    app.get '/', controller.dashboard
    app.post '/browser', controller.browser
    app.post '/keys', controller.keys
    app.post '/system/:cmd', controller.system
