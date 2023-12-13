consoleText(['Rikis Portfolio'], 'text',['blue']);

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