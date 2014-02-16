expect  = require('chai').expect
System  = require '../../../src/lib/system'

describe "System", ->
  sut = null
  beforeEach ->
    sut = new System

  describe "Updating volume", ->
    describe "when muting", ->
      it "should set volume to 0", ->
        result = sut.mute()
        expect(result).to.equal "pactl set-sink-volume 0 -- 0%"

    describe "when setting arbitrary values", ->
      it "should set a value between 0 and 100", ->
        result = sut.setVolume 80
        expect(result).to.equal "pactl set-sink-volume 0 -- 80%"

      it "should convert negatives to 0", ->
        result = sut.setVolume -20
        expect(result).to.equal "pactl set-sink-volume 0 -- 0%"

      it "should convert values over 100 to 100", ->
        result = sut.setVolume 101
        expect(result).to.equal "pactl set-sink-volume 0 -- 100%"
