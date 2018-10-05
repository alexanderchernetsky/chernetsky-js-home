function HashStorage() {
  this.addValue = function (key, value) {
    privateStorage[key] = value;
  };
  this.getValue = function (key) {
    return privateStorage[key];
  };
  this.deleteValue = function (key) {
    if (privateStorage[key]) {
      delete privateStorage[key];
      return true;
    }
    return false;
  };
  this.getKeys = function () {
    return Object.keys(privateStorage);
  };

  var privateStorage = {};
}

var drinkStorage = new HashStorage();

document.querySelector('#but1').addEventListener('click', function () {
  var drinkName = prompt('Введите название напитка') || 'untitled';
  var alco = confirm('Напиток является алкогольным?');
  if (alco === true) {
    alco = 'да';
  } else {
    alco = 'нет';
  }
  var drinkRecipe = prompt('Введите рецепт') || 'рецепт отсутсвует';
  drinkStorage.addValue(drinkName, [alco, drinkRecipe]);
});

document.querySelector('#but2').addEventListener('click', function () {
  var drinkTitle = prompt('Введите название напитка, о котором хотите получить информацию');
  if (drinkStorage.getValue(drinkTitle)) {
    document.getElementById('info').innerHTML = 'напиток ' + '<b>' + drinkTitle + '</b>' + '<br>' + 'алкогольный: ' +
        '<b>' + drinkStorage.getValue(drinkTitle)[0] + '</b>' + '<br>' + 'рецепт приготовления: ' + '<br>' + '<b>' +
        drinkStorage.getValue(drinkTitle)[1] + '</b>';
  } else {
    document.getElementById('info').textContent = 'Напиток отсутствует!';
  }
});

document.querySelector('#but3').addEventListener('click', function () {
  var redundantDrink = prompt('Введите название напитка, информацию о котором хотите удалить');
  if (drinkStorage.deleteValue(redundantDrink)) {
    document.getElementById('info').textContent = 'Информация о напитке удалена!';
  } else {
    document.getElementById('info').textContent = 'Информация о напитке отсутствует!';
  }
});

document.querySelector('#but4').addEventListener('click', function () {
  var keysArr = drinkStorage.getKeys();
  var drinkInf = document.createElement('span');
  for (var i = 0; i < keysArr.length; i++ ) {
    var tNode = document.createTextNode(keysArr[i] + ', ');
    drinkInf.appendChild(tNode);
  }
  document.getElementById('info').textContent = '';
  document.getElementById('info').appendChild(drinkInf);
});
