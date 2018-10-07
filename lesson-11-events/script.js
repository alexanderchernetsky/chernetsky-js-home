'use strict';

var siteFormContainer = [
  { label: 'Разработчики:', type: 'text', name: 'developers', id: 'dev' },
  { label: 'Название сайта:', type: 'text', name: 'website-name', id: 'siteName' },
  { label: 'URL сайта:', type: 'text', name: 'website-url', id: 'siteURL' }
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

  var legend = document.createElement('legend');
  var legendNode = document.createTextNode('Для внесения вашего сайта в каталог, заполните форму:');
  legend.appendChild(legendNode);
  fieldset.appendChild(legendNode);
  makeBreak();

  function labelCreate (name, id) {
    var label = document.createElement('label');
    var labelNode = document.createTextNode(name);
    label.appendChild(labelNode);
    label.htmlFor = id;
    fieldset.appendChild(label);
  }

  labelCreate(container[0].label, container[0].id);

  function inputCreate (name, type, id) {
    var input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.id = id;
    fieldset.appendChild(input);
    makeBreak();
  }
  
  var inp = document.createElement('input');
  inp.type = 'text';
  inp.name = 'developers';
  inp.id = 'dev';
  fieldset.appendChild(inp);
  makeBreak();



  labelCreate('Название сайта:', 'siteName');



  inputCreate('website-name', 'text', 'siteName');

  labelCreate(container[2].label, container[2].id);



  document.getElementById('body').replaceChild(clonedForm, ourForm);

})(siteFormContainer);
