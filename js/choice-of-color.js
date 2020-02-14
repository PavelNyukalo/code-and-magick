'use strict';

(function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(156, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var wizard = setup.querySelector('.setup-wizard-wrap');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardCoatInput = wizard.querySelector('input[name=coat-color]');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var wizardEyesInput = wizard.querySelector('input[name=eyes-color]');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = setup.querySelector('input[name=fireball-color]');

  // Выбор цвета плаша
  var changeColorCoat = function () {
    var color = window.util.getRandomItem(WIZARD_COAT_COLORS);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  };

  // Выбор цвета глаз
  var changeColorEyes = function () {
    var color = window.util.getRandomItem(WIZARD_EYES_COLORS);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  };

  // Выбор цвета фаербола
  var changeColorFireball = function () {
    var color = window.util.getRandomItem(WIZARD_FIREBALL_COORS);
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
