consoleText(['Rikis Portfolio'], 'text',['#344860']);

function consoleText(words, id, colors) {
  let letterCount = 1;
  let x = 1;
  let target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors)
  window.setInterval(function() {
  target.innerHTML = words[0].substring(0, letterCount)
  letterCount += x;
  }, 120)
}

window.addEventListener('scroll', function(){
  const item = document.querySelectorAll('.item');
  for(let i = 0; i < item.length; i++){
    var targetTop = item[i].offsetTop;
    if(window.scrollY + 400 > targetTop){
      item[i].classList.add('show');
    }
  }
});