var someObj = {
  className: 'open menu'
};

var someObj2 = {
  className: 'my menu menu'
};

var someObj3 = {
  className: 'my menu menu menu menu'
};

function removeCssClass(obj, cls) {
  for (var key in obj) {
    while (obj[key].indexOf(cls) !== -1) {
      var replacedStr = obj[key].replace(cls, '');
      obj[key] = replacedStr.trim();
    }
  }
  return obj;
}

console.log(removeCssClass(someObj, 'blabla'));
console.log(removeCssClass(someObj, 'open'));
console.log(removeCssClass(someObj2, 'menu'));
console.log(removeCssClass(someObj3, 'menu'));
