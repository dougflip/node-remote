createPress = (key) ->
  "KeyStrPress #{key}"

createRelease = (key) ->
  "KeyStrRelease #{key}"

createFullStroke = (key) ->
  [
    createPress key
    createRelease key
  ]

module.exports =
  # Accepts three styles of input
  # "keyname" -> produces a Press and Release
  # "press:keyname" -> produces a Press only
  # "release:keyname" -> produces a Release only
  create: (key) ->
    return null unless key?

    command = key.split ':'
    if command.length == 1
      return createFullStroke key

    if command[0] == 'press'
      return [createPress command[1]]

    [createRelease command[1]]
