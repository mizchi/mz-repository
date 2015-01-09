Repositoty = require '../index'

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

  exists: (id) -> new Promise (done) =>
    @findOne({_id: id}).then (obj) => done !!obj

  save: (obj) -> new Promise (done) =>
    @col.upsert obj, (item) => done(item)

  remove: -> new Promise (done) =>
    @col.remove obj, => done()

  all: -> @where({})

module.exports = MinimongoAdapter
