(function() {
  var currentTime = document.querySelector('.time');
  var startColor = document.querySelector('.color');
  var startTime = new Date();
  var intervalTime = 0;
  var timeToRender = 100;

  window.setInterval(() => {
    var elapsedTime = new Date() - startTime;
    currentTime.innerHTML = elapedTime;
  }, timeToRender);

  window.setInterval(() => {
    intervalTime += timeToRender;
    startColor.innerHTML = intervalTime;
  }, timeToRender);
});

// console.log(currentTime.toTimeString());
