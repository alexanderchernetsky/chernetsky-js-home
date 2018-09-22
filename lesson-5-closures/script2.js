var someObj = {
  className: 'open menu'
};

var someObj2 = {
  className: 'open menu'
};

var someObj3 = {
  className: 'my menu menu'
};

var someObj4 = {
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

function removeCssClass2(obj, cls) {
  var cssClasses = obj.className ? obj.className.split(' ') : [];
  for (var i = 0; i < cssClasses.length; i++) {
    if (cssClasses[i] === cls) {
      cssClasses[i].splice(i, 1);
      i--;
    }
  }
  obj.className = cssClasses.join(' ');
  return obj;
}

console.log(removeCssClass(someObj, 'blabla'));
console.log(removeCssClass(someObj2, 'open'));
console.log(removeCssClass(someObj3, 'menu'));
console.log(removeCssClass(someObj4, 'menu'));

console.log(removeCssClass2(someObj, 'blabla'));
console.log(removeCssClass2(someObj2, 'open'));
console.log(removeCssClass2(someObj3, 'menu'));
console.log(removeCssClass2(someObj4, 'menu'));
