module.exports = Repositoty = {}

class Repositoty.Database
  constructor: (@db) ->
  getCollection: (name) -> throw 'not implemented'

class Repositoty.Collection
  find: ->
  findById: ->
  save: ->
  exists: ->
  all: ->
  where: ->
  findOne: ->
  remove: ->
