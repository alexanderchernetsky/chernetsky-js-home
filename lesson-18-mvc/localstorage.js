'use strict';

function TLocalStorage(storageName) {
  var self = this;
  var pHash = {};
  var pHashString;
  var storageName = storageName;

  self.reset = function () {
    pHash = JSON.parse(localStorage.getItem(storageName)) || {};
  };

  self.addValue = function (key, value) {
    pHash[key] = value;
    self.saveToStorage();
  };

  self.deleteValue = function (key) {
    delete pHash[key];
    self.saveToStorage();
    return delete pHash[key];
  };

  self.getValue = function (key) {
    return pHash[key];
  };

  self.getKeys = function () {
    return (Object.keys(pHash));
  };

  self.saveToStorage = function () {
    localStorage.setItem(storageName, JSON.stringify(pHash));
  };
}
