let clicks = 0;
let clickCounter = document.querySelector('.clicks');
let cat = document.getElementById('cat');

cat.addEventListener('click', function(){
  clicks++;
  clickCounter.innerHTML = clicks;
}, false);
