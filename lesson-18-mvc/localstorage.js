'use strict';

function TLocalStorage(storageName) {
  var self = this;
  var pHash = {};

  self.reset = function () {
    pHash = {};
    console.log(storageName);
    if (storageName in localStorage) {
      console.log('yes');
      pHash = JSON.parse(localStorage.getItem(storageName));
    }
    console.log(pHash);
  };

  self.addValue = function (key, value) {
    pHash[key] = value;
    var pHashStr = JSON.stringify(pHash);
    localStorage.setItem(storageName, pHashStr);
  };

  self.deleteValue = function (key) {
    delete pHash[key];
    var pHashStr = JSON.stringify(pHash);
    localStorage.setItem(storageName, pHashStr);
    return delete pHash[key];
  };

  self.getValue = function (key) {
    return pHash[key];
  };

  self.getKeys = function () {
    return (Object.keys(pHash));
  };
}