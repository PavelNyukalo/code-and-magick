'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var HEADING_TEXT_FIRST = 'Ура вы победили!';
var HEADING_TEXT_SECOND = 'Список результатов:';
var FONT_TEXT = '16px PT Mono';
var COLOR_TEXT = '#000';
var TEXT_BASE_LINE = 'hanging';
var TEXT_HEADING_GAP = 20;
var TEXT_HEIGHT = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = COLOR_TEXT;
  ctx.font = FONT_TEXT;
  ctx.textBaseline = TEXT_BASE_LINE;
  ctx.fillText(text, x, y);
};

var renderHistogram = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var getMaxNumber = function (array) {
  var maxElement = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

var getRandomNumber = function () {
  return Math.floor(Math.random() * 100);
};

window.renderStatistics = function (ctx, names, times) {
  // Отрисовка облака
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // Отрисовка заголовка
  renderText(ctx, HEADING_TEXT_FIRST, CLOUD_X + TEXT_HEADING_GAP, CLOUD_Y + TEXT_HEADING_GAP);
  renderText(ctx, HEADING_TEXT_SECOND, CLOUD_X + TEXT_HEADING_GAP, CLOUD_Y + (TEXT_HEADING_GAP * 2));

  var maxTime = getMaxNumber(times);

  // Отрисовка баров и имен
  for (var j = 0; j < names.length; j++) {
    var playerX = CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * j;
    var playerNameY = CLOUD_HEIGHT - (TEXT_HEIGHT * 2) + CLOUD_Y;
    var playerBarHeight = (BAR_HEIGHT * times[j]) / maxTime;
    var playerBarY = BAR_HEIGHT - playerBarHeight + TEXT_HEIGHT + (TEXT_HEADING_GAP * 4) + CLOUD_Y;
    var playerBarColor = 'hsl(240, ' + getRandomNumber() + '%, 50%)';
    var playerTimeY = playerBarY - (TEXT_HEIGHT * 2);
    var playerTimeData = Math.round(times[j]);

    if (names[j] === 'Вы') {
      playerBarColor = 'rgba(255, 0, 0, 1)';
    }

    renderText(ctx, playerTimeData, playerX, playerTimeY);
    renderText(ctx, names[j], playerX, playerNameY);
    renderHistogram(ctx, playerX, playerBarY, BAR_WIDTH, playerBarHeight, playerBarColor);
  }
};
