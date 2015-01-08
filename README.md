# mz-repository

```
npm install mz-repository
```

Repository pattern implematation with Promise.

See `repository.d.ts`

Now it is only for minimongo

coffeescirpt

```coffee
Repository = require 'mz-repository/adapters/minimongo'

# setup by minimongo way
minimongo = require 'minimongo'
db = new minimongo.MemoryDb
db.addCollection 'foo'

# Use via repository api
DB = new Repository.Database(db)
Foo = DB.getCollection 'foo'
Foo.where({name: 'foo'}).then (items) -> 'items'
```

with typescript

```typescript
///<reference path='reposistory.d.ts' />
var DB = new Repository.Database(db);
var Foo = DB.getCollection<{name: string;}>('foo');
Foo.where({name: 'foo'}).then((items) => console.log(items));
```

## TODO

- PouchDB
