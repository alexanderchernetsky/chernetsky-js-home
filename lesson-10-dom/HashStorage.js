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
    return Object.keys(this);
  };
}

var drinkStorage = new HashStorage();

document.querySelector('#but1').addEventListener('click', function () {
  var drinkName = prompt('Введите название напитка');
  console.log(drinkName);
  var alco = confirm('Напиток является алкогольным?');
  if (alco === true) {
    alco = 'да';
  } else {
    alco = 'нет';
  }
  var drinkRecipe = prompt('Введите рецепт');
  drinkStorage.addValue(drinkName, [alco, drinkRecipe]);
  console.log(drinkStorage);
});

document.querySelector('#but2').addEventListener('click', function () {
  var drinkTitle = prompt('Введите название напитка, о котором хотите получить информацию');
  console.log(drinkStorage.getValue(drinkTitle));
  if (drinkStorage.getValue(drinkTitle)) {
    document.getElementById('info').innerHTML = 'напиток ' + '<b>' + drinkTitle + '</b>' + '<br>' + 'алкогольный: ' +
        '<b>' + drinkStorage[drinkTitle][0] + '</b>' + '<br>' + 'рецепт приготовления: ' + '<br>' + '<b>' +
        drinkStorage[drinkTitle][1] + '</b>';
  } else {
    document.getElementById('info').textContent = 'Напиток отсутствует!';
  }
});


document.querySelector('#but3').addEventListener('click', function () {
  var redundantDrink = prompt('Введите название напитка, информацию о котором хотите удалить');
  console.log(drinkStorage);
  if (drinkStorage.deleteValue(redundantDrink)) {
    document.getElementById('info').textContent = 'Информация о напитке удалена!';
  } else {
    document.getElementById('info').textContent = 'Информация о напитке отсутствует!';
  }
  console.log(drinkStorage);
});

document.querySelector('#but4').addEventListener('click', function () {
  console.log(drinkStorage.getKeys());
  var keysArr = drinkStorage.getKeys();
  var drinkInf = document.createElement('p');
  for (var i = 4; i < keysArr.length; i++ ) {
    var par = document.createElement('span');
    var node = document.createTextNode(keysArr[i] + ', ');
    var smth = par.appendChild(node);
    drinkInf.appendChild(smth);
  }
  document.getElementById('info').appendChild(drinkInf);
});

