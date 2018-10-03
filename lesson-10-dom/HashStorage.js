function HashStorage() {
  this.addValue = function (key, value) {
    this[key] = value;
  };
  this.getValue = function (key) {
    return this[key];
  };
  this.deleteValue = function (key) {
    if (this[key]) {
      delete this[key];
      return true;
    }
    return false;
  };
  this.getKeys = function () {
    var keysArr = [];
    for (var key in this) {
      keysArr.push(this[key]);
    }
    return keysArr;
  };
}

var drinkStorage = new HashStorage();

function drinkInfoType() {
  var drinkName = prompt('Введите название напитка');
  console.log(drinkName);
  var Alco = confirm('Напиток является алкогольным?');
  if (Alco === true) {
    Alco = 'да';
  } else {
    Alco = 'нет';
  }
  var drinkRecipe = prompt('Введите рецепт');
  drinkStorage.addValue(drinkName, [Alco, drinkRecipe]);
  console.log(drinkStorage);
}

function getDrinkInfo() {
  var drinkTitle = prompt('Введите название напитка, о котором хотите получить информацию');
  if (drinkTitle in drinkStorage) {
    document.getElementById('info').textContent = 'напиток ' + drinkTitle + '\n' + 'алкогольный: ' + drinkStorage[drinkTitle][0] + '\n' + 'рецепт приготовления: ' + drinkStorage[drinkTitle][1];
    console.log('напиток ' + drinkTitle + '\n' + 'алкогольный: ' + drinkStorage[drinkTitle][0] + '\n' + 'рецепт приготовления: ' + drinkStorage[drinkTitle][1]);
  } else {
    console.log('Напиток отсутствует!');
    document.getElementById('info').textContent = 'Напиток отсутствует!';
  }
}
