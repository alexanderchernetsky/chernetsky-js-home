'use strict';

var siteFormContainer = [
  { legendText: 'Для внесения вашего сайта в каталог, заполните форму:', type: 'legend' },
  { label: 'Разработчики:', type: 'text', name: 'developers', id: 'dev' },
  { label: 'Название сайта:', type: 'text', name: 'website-name', id: 'siteName' },
  { label: 'URL сайта:', type: 'text', name: 'website-url', id: 'siteURL' },
  { label: 'Дата запуска сайта:', type: 'text', name: 'website-start', id: 'start'},
  { label: 'Посетителей в сутки:', type: 'text', name: 'website-users', id: 'users'},
  { label: 'E-mail для связи:', type: 'email', name: 'author-email', id: 'email'},
  { label: 'Рубрика каталога:', type: 'select', name: 'catalog-heading', id: 'heading', options: ['бытовая техника', 'здоровье', 'домашний уют'],
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
    input.classList.add('wide');
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

  function textAreaCreate(type, name, labelTxt, id, cols, rows) {
    labelCreate(labelTxt, id);
    makeBreak();
    var textArea = document.createElement('textarea');
    textArea.name = name;
    textArea.id = id;
    textArea.cols = cols;
    textArea.rows = rows;
    fieldset.appendChild(textArea);
    makeBreak();
    textArea.classList.add('wide');
  }

  function buttCreate(type, value, form) {
    var butt = document.createElement('input');
    butt.type = type;
    butt.value = value;
    butt.setAttribute('form', form);
    fieldset.appendChild(butt);
  }

  function addFormElement(i) {
    if (i.type === 'legend') {
      legendCreate(i.legendText);
    }
    if ((i.type === 'text') || (i.type === 'email')) {
      inputCreate(i.name, i.type, i.label, i.id);
    }
    if (i.type === 'select') {
      selectCreate(i.name, i.id, i.options, i.values, i.label);
    }
    if (i.type === 'radio') {
      radioCreate(i.span, i.type, i.name, i.ids, i.values, i.labels);
    }
    if (i.type === 'checkbox') {
      checkboxCreate(i.type, i.name, i.label, i.id);
    }
    if (i.type === 'textarea') {
      textAreaCreate(i.type, i.name, i.label, i.id, i.cols, i.rows);
    }
    if (i.type === 'button') {
      buttCreate(i.type, i.value, i.form);
    }
  }

  container.forEach(addFormElement);

  var divWrap = document.createElement('div');
  divWrap.classList.add('wrapper');
  document.getElementById('body').insertBefore(divWrap, ourForm);
  divWrap.appendChild(clonedForm);
  document.getElementById('body').removeChild(ourForm);
})(siteFormContainer);
