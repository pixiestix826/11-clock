
(function() {
  var timer = document.querySelector('.time');
  var colorBar = document.querySelector('.color');
  window.setInterval(() => {
    var currentTime = new Date();
    console.log(currentTime.toTimeString());
    var curr = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    timer.innerHTML = curr;
  }, 1000);
})();
