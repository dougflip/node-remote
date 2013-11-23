expect        = require('chai').expect
Volume        = require '../../../src/volume'

describe "Volume", ->

  volume = null

  beforeEach ->
    volume = new Volume

  describe "when muting", ->
    it "should set volume to 0", ->
      result = volume.mute()
      expect(result).to.equal "pactl set-sink-volume 0 -- 0%"

  describe "when setting arbitrary values", ->
    it "should set a value between 0 and 100", ->
      result = volume.set level: 80
      expect(result).to.equal "pactl set-sink-volume 0 -- 80%"

    it "should convert negatives to 0", ->
      result = volume.set level: -20
      expect(result).to.equal "pactl set-sink-volume 0 -- 0%"

    it "should convert values over 100 to 100", ->
      result = volume.set level: 101
      expect(result).to.equal "pactl set-sink-volume 0 -- 100%"
