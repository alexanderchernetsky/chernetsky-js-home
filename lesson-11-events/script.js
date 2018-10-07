'use strict';

var siteFormContainer = [
  { legendText: 'Для внесения вашего сайта в каталог, заполните форму:' },
  { label: 'Разработчики:', type: 'text', name: 'developers', id: 'dev' },
  { label: 'Название сайта:', type: 'text', name: 'website-name', id: 'siteName' },
  { label: 'URL сайта:', type: 'text', name: 'website-url', id: 'siteURL' },
  { label: 'Дата запуска сайта:', type: 'text', name: 'website-start', id: 'start'},
  { label: 'Посетителей в сутки:', type: 'text', name: 'website-users', id: 'users'},
  { label: 'E-mail для связи:', type: 'email', name: 'author-email', id: 'email'},
  { label: 'Рубрика каталога:', type: 'text', name: 'catalog-heading', id: 'heading', options: ['бытовая техника', 'здоровье', 'домашний уют'],
    values: ['appliances', 'health', 'home'] }
];

(function generateForm (container) {

  var ourForm = document.getElementById('addSiteForm');
  var clonedForm = ourForm.cloneNode(true);

  var fieldset = document.createElement('fieldset');
  clonedForm.appendChild(fieldset);

  function makeBreak() {
    var br = document.createElement('br');
    fieldset.appendChild(br);
  }

  function legendCreate(legendText) {
    var legend = document.createElement('legend');
    var legendNode = document.createTextNode(legendText);
    legend.appendChild(legendNode);
    fieldset.appendChild(legend);
  }

  legendCreate(container[0].legendText);

  function labelCreate (name, id) {
    var label = document.createElement('label');
    var labelNode = document.createTextNode(name);
    label.appendChild(labelNode);
    label.htmlFor = id;
    fieldset.appendChild(label);
  }

  function inputCreate (name, type, id) {
    var input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.id = id;
    fieldset.appendChild(input);
    makeBreak();
  }

  labelCreate(container[1].label, container[1].id);
  inputCreate(container[1].name, container[1].type, container[1].id);

  labelCreate(container[2].label, container[2].id);
  inputCreate(container[2].name, container[2].type, container[2].id);

  labelCreate(container[3].label, container[3].id);
  inputCreate(container[3].name, container[3].type, container[3].id);

  labelCreate(container[4].label, container[4].id);
  inputCreate(container[4].name, container[4].type, container[4].id);

  labelCreate(container[5].label, container[5].id);
  inputCreate(container[5].name, container[5].type, container[5].id);

  labelCreate(container[6].label, container[6].id);
  inputCreate(container[6].name, container[6].type, container[6].id);

  labelCreate(container[7].label, container[7].id);

  function selectCreate (name, id, opt, val) {
    var select = document.createElement('select');

    for ( var i = 0; i < opt.length; i++) {
      var option = document.createElement('option');
      option.value = val[i];
      var optionNode = document.createTextNode(opt[i]);
      option.appendChild(optionNode);
      select.appendChild(option);
    }

    fieldset.appendChild(select);
    makeBreak();
  }
  
  selectCreate(container[7].name, container[7].id, container[7].options, container[7].values);



  document.getElementById('body').replaceChild(clonedForm, ourForm);

})(siteFormContainer);
