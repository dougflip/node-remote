path    = require "path"
express = require 'express'
router  = require './router'

app     = express()

app.configure ->
  app.set "views", "#{__dirname}/views"
  app.set "view engine", "jade"
  app.use express.static(path.join(__dirname, "../public"))
  app.use express.static(path.join(__dirname, "../angular"))
  app.use express.urlencoded()
  app.use express.json()

router.configure app

app.listen 9000

console.log "Listening for requests on 9000"
