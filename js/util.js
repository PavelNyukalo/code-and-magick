'use strict';

(function () {
  var ENTER_KEY = 'Enter';
  var ESCAPE_KEY = 'Escape';

  var isEnterEvent = function (evt, action) {
    if (evt.key === ENTER_KEY) {
      action();
    }
  };

  var isEscapeEvent = function (evt, action) {
    if (evt.key === ESCAPE_KEY) {
      action();
    }
  };

  var getRandomItem = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  window.util = {
    isEnterEvent: isEnterEvent,
    isEscapeEvent: isEscapeEvent,
    getRandomItem: getRandomItem
  };
})();
