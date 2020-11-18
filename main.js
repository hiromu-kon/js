const display = document.getElementById('display');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let elapse = 0;
let timeId = null;

function updateTime() {
  const ms = Math.floor(elapse / 100) % 10;
  const s1 = Math.floor(elapse / 1000) % 10;
  const s2 = Math.floor(elapse / 10000) % 10;
  const s3 = Math.floor(elapse / 100000) %10;

  const msStr = ms.toString();
  const s1Str = s1.toString();
  const s2Str = s2.toString();
  const s3Str = s3.toString();

  display.innerHTML = `${s3Str}:${s2Str}:${s1Str}:${msStr}`;
}

startButton.addEventListener('click' , function(event) {
  if (timeId !== null) { return; }
  let pre_time = new Date();
  timeId = setInterval(function() {
    const now = new Date();
    elapse += now - pre_time;
    pre_time = now;
    updateTime();
  }, 100);
});

stopButton.addEventListener('click' , function(event) {
  clearInterval(timeId);
  timeId = null;
});

resetButton.addEventListener('click' , function(event) {
  elapse = 0;
  updateTime();
});
