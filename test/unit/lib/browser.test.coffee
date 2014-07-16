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
    cmd = browser.buildCommand('this is a search term for the browser')
    expect(cmd).to.eql 'firefox "this is a search term for the browser"'

  it 'should NOT double quote the url argument', ->
    cmd = browser.buildCommand('"already quoted"')
    expect(cmd).to.eql 'firefox "already quoted"'

  it "should create a command with no flags", ->
    cmd = browser.buildCommand("www.netflix.com")
    expect(cmd).to.eql 'firefox "www.netflix.com"'
