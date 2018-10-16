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

var ourForm = document.getElementById('addSiteForm');

(function generateForm(container, form) {
  var clonedForm = form.cloneNode(true);
  var fieldset = document.createElement('fieldset');
  clonedForm.appendChild(fieldset);

  function makeBreak() {
    return document.createElement('br');
  }

  function legendCreate(legendText) {
    var legend = document.createElement('legend');
    var legendNode = document.createTextNode(legendText);
    legend.appendChild(legendNode);
    return legend;
  }

  function labelCreate(labelTxt, id) {
    var label = document.createElement('label');
    var labelNode = document.createTextNode(labelTxt);
    label.appendChild(labelNode);
    label.htmlFor = id;
    return label;
  }

  function inputCreate(name, type, labelTxt, id) {
    fieldset.appendChild(labelCreate(labelTxt, id));
    var input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.id = id;
    input.classList.add('wide');
    fieldset.appendChild(makeBreak());
    return input;
  }

  function selectCreate(name, id, opt, val, labelTxt) {
    fieldset.appendChild(labelCreate(labelTxt, id));
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

    return select;
  }

  function radioCreate(span, type, name, ids, values, labels) {
    var div = document.createElement('div');
    var spanTag = document.createElement('span');
    var spanNode = document.createTextNode(span);
    spanTag.appendChild(spanNode);
    div.appendChild(spanTag);

    for (var i = 0; i < ids.length; i++) {
      var radio = document.createElement('input');
      radio.type = type;
      radio.name = name;
      radio.id = ids[i];
      radio.value = values[i];
      div.appendChild(radio);
      div.appendChild(labelCreate(labels[i], ids[i]));
    }

    return div;
  }

  function checkboxCreate(type, name, labelTxt, id) {
    fieldset.appendChild(labelCreate(labelTxt, id));
    var checkBox = document.createElement('input');
    checkBox.type = type;
    checkBox.name = name;
    checkBox.id = id;
    return checkBox;
  }

  function textAreaCreate(type, name, labelTxt, id, cols, rows) {
    fieldset.appendChild(labelCreate(labelTxt, id));
    fieldset.appendChild(makeBreak());
    var textArea = document.createElement('textarea');
    textArea.name = name;
    textArea.id = id;
    textArea.cols = cols;
    textArea.rows = rows;
    textArea.classList.add('wide');
    fieldset.appendChild(makeBreak());
    return textArea;
  }

  function buttCreate(type, value, forma) {
    var butt = document.createElement('input');
    butt.type = type;
    butt.value = value;
    butt.setAttribute('form', forma);
    return butt;
  }

  function addFormElement(i) {
    switch (i.type) {
    case 'legend':
      fieldset.appendChild(legendCreate(i.legendText));
      break;
    case 'text':
    case 'email':
      fieldset.appendChild(inputCreate(i.name, i.type, i.label, i.id));
      break;
    case 'select':
      fieldset.appendChild(selectCreate(i.name, i.id, i.options, i.values, i.label));
      fieldset.appendChild(makeBreak());
      break;
    case 'radio':
      fieldset.appendChild(radioCreate(i.span, i.type, i.name, i.ids, i.values, i.labels));
      break;
    case 'checkbox':
      fieldset.appendChild(checkboxCreate(i.type, i.name, i.label, i.id));
      fieldset.appendChild(makeBreak());
      break;
    case 'textarea':
      fieldset.appendChild(textAreaCreate(i.type, i.name, i.label, i.id, i.cols, i.rows));
      break;
    case 'button':
      fieldset.appendChild(buttCreate(i.type, i.value, i.form));
      break;
    default:
      console.error('Invalid form element. Break form creation');
    }
  }

  container.forEach(addFormElement);

  var divWrap = document.createElement('div');
  divWrap.classList.add('wrapper');
  document.getElementById('body').insertBefore(divWrap, form);
  divWrap.appendChild(clonedForm);
  document.getElementById('body').removeChild(form);
})(siteFormContainer, ourForm);
