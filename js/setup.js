'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(156, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NUMBER_OF_WIZARDS = 4;
var ENTER_KEY = 'Enter';
var ESCAPE_KEY = 'Escape';

// Окно настроек
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

// Элементы мага
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardCoatInput = setup.querySelector('input[name=coat-color]');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesInput = setup.querySelector('input[name=eyes-color]');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var wizardFireballInput = setup.querySelector('input[name=fireball-color]');

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var getRandomItem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateData = function (num) {
  var wizards = [];

  for (var i = 0; i < num; i++) {
    wizards.push({
      name: getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_SURNAMES),
      coatColor: getRandomItem(WIZARD_COAT_COLORS),
      eyesColor: getRandomItem(WIZARD_EYES_COLORS)
    });
  }

  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (array) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(renderWizard(array[i]));
  }

  similarListElement.appendChild(fragment);
};

var data = generateData(NUMBER_OF_WIZARDS);
renderWizards(data);

var character = document.querySelector('.setup-similar');
character.classList.remove('hidden');

// Взаимодействие с окном измненения персонажа
var onPopupEscPress = function (evt) {
  if (evt.key === ESCAPE_KEY && evt.target.tagName !== 'INPUT') {
    closeSetup();
  }
};

var openSetup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closeSetup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openSetup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openSetup();
  }
});

setupClose.addEventListener('click', function () {
  closeSetup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeSetup();
  }
});

// Выбор цвета плаша
var changeColorCoat = function () {
  var color = getRandomItem(WIZARD_COAT_COLORS);
  wizardCoat.style.fill = color;
  wizardCoatInput.value = color;
};

// Выбор цвета глаз
var changeColorEyes = function () {
  var color = getRandomItem(WIZARD_EYES_COLORS);
  wizardEyes.style.fill = color;
  wizardEyesInput.value = color;
};

// Выбор цвета фаербола
var changeColorFireball = function () {
  var color = getRandomItem(WIZARD_FIREBALL_COORS);
  wizardFireball.style.background = color;
  wizardFireballInput.value = color;
};

wizardCoat.addEventListener('click', function () {
  changeColorCoat();
});

wizardEyes.addEventListener('click', function () {
  changeColorEyes();
});

wizardFireball.addEventListener('click', function () {
  changeColorFireball();
});
