(function() {
  var timer = document.querySelector('.time');
  var bar = document.querySelector('.timer__bar');
  window.setInterval(() => {
    var currentTime = new Date();
    var nowHour = padZeros(currentTime.getHours());
    var nowMin = padZeros(currentTime.getMinutes());
    var nowSec = padZeros(currentTime.getSeconds());
    var now = `${nowHour}:${nowMin}:${nowSec}`;
    timer.innerHTML = now;
  }, 1000);
})();

function padZeros(time) { //if >10 add 0 in front of value.
    if (time < 10) {
      return '0' + time;
    }

    return time;
  }

console.assert(padZeros(1) == '01');
console.assert(padZeros(30) == '30');
