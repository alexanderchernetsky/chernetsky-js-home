'use strict';

function HashStorage() {
  var storage = {};

  this.addValue = function (key, value) {
    storage[key] = value;
  };
  this.getValue = function (key) {
    return storage[key];
  };
  this.deleteValue = function (key) {
    if (storage[key]) {
      return delete storage[key];
    }
    return false;
  };
  this.getKeys = function () {
    return Object.keys(storage);
  };
}
