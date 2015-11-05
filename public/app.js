var timer = document.querySelector('.time');
var colorBar = document.querySelector('.color');

(function() {
  window.setInterval(() => {
    var currentTime = new Date();
    console.log(currentTime.toTimeString());
    timer.innerHTML = currentTime;
  }, 1000);
})();
