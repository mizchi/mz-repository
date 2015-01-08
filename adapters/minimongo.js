!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.MinimongoAdapter=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var MinimongoAdapter, Repositoty,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Repositoty = require('../index');

MinimongoAdapter = {};

MinimongoAdapter.Database = (function(_super) {
  __extends(Database, _super);

  function Database() {
    return Database.__super__.constructor.apply(this, arguments);
  }

  Database.prototype.collectionClass = function() {
    return MinimongoAdapter.Collection;
  };

  Database.prototype.getCollection = function(name) {
    var cls;
    cls = this.collectionClass();
    return new cls(this.db[name]);
  };

  return Database;

})(Repositoty.Database);

MinimongoAdapter.Collection = (function(_super) {
  __extends(Collection, _super);

  function Collection(col) {
    this.col = col;
  }

  Collection.prototype.where = function(query) {
    return new Promise((function(_this) {
      return function(done) {
        return _this.col.find(query).fetch(function(items) {
          return done(items);
        });
      };
    })(this));
  };

  Collection.prototype.findOne = function(query) {
    return new Promise((function(_this) {
      return function(done) {
        return _this.col.findOne(query, function(item) {
          return done(item);
        });
      };
    })(this));
  };

  Collection.prototype.find = function(id) {
    return this.findById(id);
  };

  Collection.prototype.findById = function(id) {
    return this.findOne({
      _id: id
    });
  };

  Collection.prototype.exists = function(id) {
    return new Promise((function(_this) {
      return function(done) {
        return _this.findOne({
          _id: id
        }).then(function(obj) {
          return done(!!obj);
        });
      };
    })(this));
  };

  Collection.prototype.save = function(obj) {
    return new Promise((function(_this) {
      return function(done) {
        return _this.col.upsert(obj, function(item) {
          return done(item);
        });
      };
    })(this));
  };

  Collection.prototype.remove = function() {
    return new Promise((function(_this) {
      return function(done) {
        return _this.col.remove(obj, function() {
          return done();
        });
      };
    })(this));
  };

  return Collection;

})(Repositoty.Collection);

module.exports = MinimongoAdapter;



},{"../index":2}],2:[function(require,module,exports){
var Repositoty;

module.exports = Repositoty = {};

Repositoty.Database = (function() {
  function Database(db) {
    this.db = db;
  }

  Database.prototype.getCollection = function(name) {
    throw 'not implemented';
  };

  return Database;

})();

Repositoty.Collection = (function() {
  function Collection() {}

  Collection.prototype.find = function() {};

  Collection.prototype.findById = function() {};

  Collection.prototype.save = function() {};

  Collection.prototype.where = function() {};

  Collection.prototype.findOne = function() {};

  Collection.prototype.remove = function() {};

  Collection.prototype.validate = function() {
    return true;
  };

  return Collection;

})();



},{}]},{},[1])(1)
});