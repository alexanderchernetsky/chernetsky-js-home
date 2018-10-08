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
    values: ['appliances', 'health', 'home'] },
  { span: 'Размещение:', type: 'radio', name: 'deployment', ids: ['freeDepl', 'paidDepl', 'vipDepl'], values: ['free', 'paid', 'vip'],
    labels: ['бесплатное', 'платное', 'VIP' ] },
  { label: 'Разрешить отзывы:', type: 'checkbox', name: 'testimonials-permission', id: 'testimonials' },
  { label: 'Описание сайта:', type: 'textarea', name: 'website-description', id: 'description', cols: '30', rows: '10'},
  { type: 'button', value: 'Опубликовать', form: 'addSiteForm'}
];

(function generateForm(container) {
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

  function labelCreate(labelTxt, id) {
    var label = document.createElement('label');
    var labelNode = document.createTextNode(labelTxt);
    label.appendChild(labelNode);
    label.htmlFor = id;
    fieldset.appendChild(label);
  }

  function inputCreate(name, type, labelTxt, id) {
    labelCreate(labelTxt, id);
    var input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.id = id;
    fieldset.appendChild(input);
    makeBreak();
  }

  function selectCreate(name, id, opt, val, labelTxt) {
    labelCreate(labelTxt, id);
    var select = document.createElement('select');
    select.name = name;
    select.id = id;

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

  function radioCreate(span, type, name, ids, values, labels) {
    var spanTag = document.createElement('span');
    var spanNode = document.createTextNode(span);
    spanTag.appendChild(spanNode);
    fieldset.appendChild(spanTag);

    for (var i = 0; i < ids.length; i++) {
      var radio = document.createElement('input');
      radio.type = type;
      radio.name = name;
      radio.id = ids[i];
      radio.value = values[i];
      fieldset.appendChild(radio);
      labelCreate(labels[i], ids[i]);
    }

    makeBreak();
  }

  function checkboxCreate(type, name, labelTxt, id) {
    labelCreate(labelTxt, id);
    var checkBox = document.createElement('input');
    checkBox.type = type;
    checkBox.name = name;
    checkBox.id = id;
    fieldset.append(checkBox);
    makeBreak();
  }

  function textareaCreate(type, name, labelTxt, id, cols, rows) {
    labelCreate(labelTxt, id);
    makeBreak();
    var textArea = document.createElement('textarea');
    textArea.name = name;
    textArea.id = id;
    textArea.cols = cols;
    textArea.rows = rows;
    fieldset.appendChild(textArea);
    makeBreak();
  }

  function buttCreate(type, value, form) {
    var butt = document.createElement('input');
    butt.type = type;
    butt.value = value;
    butt.setAttribute('form', form);
    fieldset.appendChild(butt);
  }

  legendCreate(container[0].legendText);

  inputCreate(container[1].name, container[1].type, container[1].label, container[1].id);

  inputCreate(container[2].name, container[2].type, container[2].label, container[2].id);

  inputCreate(container[3].name, container[3].type, container[3].label, container[3].id);

  inputCreate(container[4].name, container[4].type, container[4].label, container[4].id);

  inputCreate(container[5].name, container[5].type, container[5].label, container[5].id);

  inputCreate(container[6].name, container[6].type, container[6].label, container[6].id);

  selectCreate(container[7].name, container[7].id, container[7].options, container[7].values, container[7].label);

  radioCreate(container[8].span, container[8].type, container[8].name, container[8].ids, container[8].values, container[8].labels);

  checkboxCreate(container[9].type, container[9].name, container[9].label, container[9].id);

  textareaCreate(container[10].type, container[10].name, container[10].label, container[10].id, container[10].cols, container[10].rows);

  buttCreate(container[11].type, container[11].value, container[11].form);

  document.getElementById('body').replaceChild(clonedForm, ourForm);
})(siteFormContainer);
