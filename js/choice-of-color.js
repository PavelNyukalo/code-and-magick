'use strict';

(function () {
  var wizard = window.dialog.setup.querySelector('.setup-wizard-wrap');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardCoatInput = wizard.querySelector('input[name=coat-color]');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var wizardEyesInput = wizard.querySelector('input[name=eyes-color]');
  var wizardFireball = window.dialog.setup.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = window.dialog.setup.querySelector('input[name=fireball-color]');

  // Выбор цвета плаша
  var changeColorCoat = function () {
    var color = window.util.getRandomItem(window.constants.WIZARD_COAT_COLORS);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  };

  // Выбор цвета глаз
  var changeColorEyes = function () {
    var color = window.util.getRandomItem(window.constants.WIZARD_EYES_COLORS);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  };

  // Выбор цвета фаербола
  var changeColorFireball = function () {
    var color = window.util.getRandomItem(window.constants.WIZARD_FIREBALL_COORS);
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
})();
