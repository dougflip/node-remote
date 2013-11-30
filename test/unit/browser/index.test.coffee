expect      = require('chai').expect
Browser     = require '../../../src/browser'

describe "Browser", ->
  browser = null
  beforeEach ->
    browser = new Browser

  it "should return null if a url is not provided", ->
    cmd = browser.buildCommand()
    expect(cmd).to.eql null

  it "should create a command with no flags", ->
    cmd = browser.buildCommand("www.netflix.com")
    expect(cmd).to.eql "google-chrome  www.netflix.com"

  it "should create a command with a user and url", ->
    cmd = browser.buildCommand("www.netflix.com", "--profile-directory": "\"Profile 1\"")
    expect(cmd).to.eql "google-chrome --profile-directory=\"Profile 1\" www.netflix.com"
