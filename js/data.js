'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(156, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var generateData = function (num) {
    var wizards = [];

    for (var i = 0; i < num; i++) {
      wizards.push({
        name: window.util.getRandomItem(WIZARD_NAMES) + ' ' + window.util.getRandomItem(WIZARD_SURNAMES),
        coatColor: window.util.getRandomItem(WIZARD_COAT_COLORS),
        eyesColor: window.util.getRandomItem(WIZARD_EYES_COLORS)
      });
    }

    return wizards;
  };

  window.data = {
    generate: generateData
  };
})();
