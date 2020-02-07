'use strict';

(function () {
  var similarListElement = window.dialog.setup.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

  var generateData = function (num) {
    var wizards = [];

    for (var i = 0; i < num; i++) {
      wizards.push({
        name: window.util.getRandomItem(window.constants.WIZARD_NAMES) + ' ' + window.util.getRandomItem(window.constants.WIZARD_SURNAMES),
        coatColor: window.util.getRandomItem(window.constants.WIZARD_COAT_COLORS),
        eyesColor: window.util.getRandomItem(window.constants.WIZARD_EYES_COLORS)
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

  var data = generateData(window.constants.NUMBER_OF_WIZARDS);
  renderWizards(data);

  var character = document.querySelector('.setup-similar');
  character.classList.remove('hidden');
})();
