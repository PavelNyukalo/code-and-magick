'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(156, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var getRandomNumber = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var wizards = [
  {
    name: getRandomNumber(WIZARD_NAMES) + ' ' + getRandomNumber(WIZARD_SURNAMES),
    coatColor: getRandomNumber(WIZARD_COATCOLORS),
    eyesColor: getRandomNumber(WIZARD_EYESCOLORS)
  },
  {
    name: getRandomNumber(WIZARD_NAMES) + ' ' + getRandomNumber(WIZARD_SURNAMES),
    coatColor: getRandomNumber(WIZARD_COATCOLORS),
    eyesColor: getRandomNumber(WIZARD_EYESCOLORS)
  },
  {
    name: getRandomNumber(WIZARD_NAMES) + ' ' + getRandomNumber(WIZARD_SURNAMES),
    coatColor: getRandomNumber(WIZARD_COATCOLORS),
    eyesColor: getRandomNumber(WIZARD_EYESCOLORS)
  },
  {
    name: getRandomNumber(WIZARD_NAMES) + ' ' + getRandomNumber(WIZARD_SURNAMES),
    coatColor: getRandomNumber(WIZARD_COATCOLORS),
    eyesColor: getRandomNumber(WIZARD_EYESCOLORS)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

var character = document.querySelector('.setup-similar');
character.classList.remove('hidden');
