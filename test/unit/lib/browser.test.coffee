expect      = require('chai').expect
Browser     = require '../../../src/lib/browser'

describe "Browser", ->
  browser = null
  beforeEach ->
    browser = new Browser

  it "should return null if a url is not provided", ->
    cmd = browser.buildCommand()
    expect(cmd).to.eql null

  it 'should quote the url argument', ->
    cmd = browser.buildCommand('this is a search term for Chrome')
    expect(cmd).to.eql 'google-chrome  "this is a search term for Chrome"'

  it 'should NOT double quote the url argument', ->
    cmd = browser.buildCommand('"already quoted"')
    expect(cmd).to.eql 'google-chrome  "already quoted"'

  it "should create a command with no flags", ->
    cmd = browser.buildCommand("www.netflix.com")
    expect(cmd).to.eql 'google-chrome  "www.netflix.com"'

  it "should create a command with a user and url", ->
    cmd = browser.buildCommand("www.netflix.com", "--profile-directory": "\"Profile 1\"")
    expect(cmd).to.eql 'google-chrome --profile-directory="Profile 1" "www.netflix.com"'
