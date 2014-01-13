coreCtrl    = require './controllers/core'

module.exports =
  configure: (app) ->
    app.get '/', coreCtrl.dashboard
    app.post '/browser', coreCtrl.browser
    app.post '/keys', coreCtrl.keys
    app.post '/system/:cmd', coreCtrl.system
