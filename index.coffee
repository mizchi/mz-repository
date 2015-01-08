Repositoty = {}
class Repositoty.Database
  constructor: (@db) ->
  getCollection: (name) -> throw 'not implemented'

class Repositoty.Collection
  find: ->
  findById: ->
  save: ->
  where: ->
  findOne: ->
  remove: ->
  validate: -> true

# minimongo adapter
MinimongoAdapter = {}
class MinimongoAdapter.Database extends Repositoty.Database
  collectionClass: -> MinimongoAdapter.Collection
  getCollection: (name) ->
    cls = @collectionClass()
    new cls @db[name]

class MinimongoAdapter.Collection extends Repositoty.Collection
  constructor: (@col) ->

  where: (query) -> new Promise (done) =>
    @col.find(query).fetch (items) -> done(items)

  findOne: (query) -> new Promise (done) =>
    @col.findOne query, (item) -> done(item)

  find: (id) -> @findById(id)

  findById: (id) -> @findOne({_id: id})

  save: (obj) -> new Promise (done) =>
    @col.upsert obj, (item) => done(item)

  remove: -> new Promise (done) =>
    @col.remove obj, => done()
