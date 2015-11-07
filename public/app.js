(function() {
  var timer = document.querySelector('.time');
  var bar = document.querySelector('.timer__bar');
  var backgroundColor = document.querySelector('.clock');

  window.setInterval(() => {
    var currentTime = new Date();
    var nowHour = padZeros(currentTime.getHours());
    var nowMin = padZeros(currentTime.getMinutes());
    var nowSec = padZeros(currentTime.getSeconds());
    var now = `${nowHour}:${nowMin}:${nowSec}`;
    timer.innerHTML = now;

    console.log(secColor);
    console.log(minColor);
    console.log(hourColor);

    backgroundColor.style.background = `rgb(${secColor}, ${minColor}, ${hourColor})`;
    bar.style.width = (nowSec * 5 + 'rem');
  }, 1000);

  var toColorRange = (number, base) => {
    return number / base * 255;
    return Math.floor(number / base * 255);
  };

  function padZeros(time) {
    if (time < 10) {
      return '0' + time;
    }

    return time;
  }

})();
