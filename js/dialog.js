'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var defoltX = getComputedStyle(setup).left;
  var defoltY = getComputedStyle(setup).top;

  var onPopupEscPress = function (evt) {
    if (evt.target.tagName !== 'INPUT') {
      window.util.isEscapeEvent(evt, closeSetup);
    }
  };

  var openSetup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closeSetup = function () {
    setup.classList.add('hidden');
    setup.style.top = defoltY;
    setup.style.left = defoltX;
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openSetup);
  });

  setupClose.addEventListener('click', function () {
    closeSetup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeSetup);
  });

  window.dialog = {
    setup: setup
  };
})();
