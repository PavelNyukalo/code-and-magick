'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var defoltX = getComputedStyle(setup).left;
  var defoltY = getComputedStyle(setup).top;
  var simularList = document.querySelector('.setup-similar-list');
  var form = setup.querySelector('.setup-wizard-form');

  var onPopupEscPress = function (evt) {
    if (evt.target.tagName !== 'INPUT') {
      window.util.isEscapeEvent(evt, closeSetup);
    }
  };

  var openSetup = function () {
    setup.classList.remove('hidden');
    window.backend.load(window.simular.successHandler, window.backend.onError);
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closeSetup = function () {
    setup.classList.add('hidden');
    setup.style.top = defoltY;
    setup.style.left = defoltX;
    simularList.innerHTML = '';
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

  form.addEventListener('submit', function (evt) {
    var submitButton = setup.querySelector('.setup-submit');
    submitButton.textContent = 'Данные отправляются, подождите.';
    submitButton.disabled = true;

    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
      submitButton.textContent = 'Сохранить';
      submitButton.disabled = false;
      simularList.innerHTML = '';
    }, window.backend.onError);

    evt.preventDefault();
  });
})();
