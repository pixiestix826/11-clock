(function() {
  var timer = document.querySelector('.time');
  var colorSpan = document.querySelector('.color');
  var bar = document.querySelector('.timer__bar');
  var backgroundColor = document.querySelector('.clock');

  window.setInterval(() => {
    var currentTime = new Date();
    var nowHour = padZeros(currentTime.getHours());
    var nowMin = padZeros(currentTime.getMinutes());
    var nowSec = padZeros(currentTime.getSeconds());
    var now = `${nowHour}:${nowMin}:${nowSec}`;
    timer.innerHTML = now;

    var hourColor = toColorRange(nowHour, 60);
    var minColor = toColorRange(nowMin, 60);
    var secColor = toColorRange(nowSec, 60);

    var colorVal = `rgb(${hourColor}, ${minColor}, ${secColor})`;

    backgroundColor.style.background = colorVal;
    colorSpan.innerHTML = colorVal;
    bar.style.width = (nowSec * 5 + 'px');
  }, 1000);

  var toColorRange = (number, base) => {
    return Math.floor(number / base * 255);
  };

  function padZeros(time) {
    if (time < 10) {
      return '0' + time;
    }

    return time;
  }

})();
