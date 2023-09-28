(function () {
  var msecs = 0;
  var sec = 0;

  var milliseconds = document.querySelector('.milisec');
  var seconds = document.querySelector('.sec');

  var startBtn = document.querySelector('.start');
  var stopBtn = document.querySelector('.stop');
  var resetBtn = document.querySelector('.reset');

  var timer;

  startBtn.addEventListener('click', function () {
    clearInterval(timer);

    timer = setInterval(startTimer, 10);
  });

  stopBtn.addEventListener('click', function () {
    stopTimer('pause');
  });

  resetBtn.addEventListener('click', function () {
    stopTimer();
    milliseconds.innerHTML = `00`;
    seconds.innerHTML = `00`;
  });

  function startTimer() {
    stopBtn.style.display = 'initial';
    startBtn.style.display = 'none';
    msecs++;
    if (msecs > 99) {
      sec++;
      msecs = 0;

      milliseconds.innerHTML = msecs;
      seconds.innerHTML = sec;
    }

    if (msecs != 0) {
      milliseconds.innerHTML = `${msecs < 10 ? '0' : ''}${msecs}`;
    } else if (sec != 10) {
      seconds.innerHTML = `${sec < 10 ? '0' : ''}${sec}`;
    }
  }

  function stopTimer(state) {
    startBtn.innerHTML = state === 'pause' ? 'Continue' : 'Start';

    startBtn.style.display = 'initial';
    stopBtn.style.display = 'none';

    clearInterval(timer);
  }
})();
