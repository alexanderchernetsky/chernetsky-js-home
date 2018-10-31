'use strict';

function TLocalStorage(storageName) {
  var self = this;
  var pHash = {};
  var pHashString;

  self.reset = function () {
    pHash = {};
    if (storageName in localStorage) {
      pHash = JSON.parse(localStorage.getItem(storageName));
    }
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
    pHashString = JSON.stringify(pHash);
    localStorage.setItem(storageName, pHashString);
  };
}