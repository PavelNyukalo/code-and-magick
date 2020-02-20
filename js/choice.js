'use strict';

(function () {
  var Wizard = {
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(156, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var setup = document.querySelector('.setup');
  var wizard = setup.querySelector('.setup-wizard-wrap');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name=coat-color]');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name=eyes-color]');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = setup.querySelector('input[name=fireball-color]');

  var color = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  // Выбор цвета плаша
  var changeColorCoat = function () {
    var newColor = window.util.getRandomItem(Wizard.COAT_COLORS);
    wizardCoat.style.fill = newColor;
    wizardCoatInput.value = newColor;
    color.onCoatChange(newColor);
  };

  // Выбор цвета глаз
  var changeColorEyes = function () {
    var newColor = window.util.getRandomItem(Wizard.EYES_COLORS);
    wizardEyes.style.fill = newColor;
    wizardEyesInput.value = newColor;
    color.onEyesChange(newColor);
  };

  // Выбор цвета фаербола
  var changeColorFireball = function () {
    var newColor = window.util.getRandomItem(Wizard.FIREBALL_COORS);
    wizardFireball.style.background = newColor;
    wizardFireballInput.value = newColor;
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

  window.choice = {
    color: color
  };
})();
