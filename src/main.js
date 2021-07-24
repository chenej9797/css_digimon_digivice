import './style.scss'

window.onload = function() {
  var switcher = false
  var num = 1

  document.querySelector('.button-left').addEventListener('click', function () {
    if (!switcher) {
      document.querySelector('.monitor-image').classList.add('pixel-1')
      document.querySelector('.sound').play()
      switcher = true
      num = 1
    } else {
      document.querySelector('.monitor-image').classList.remove('pixel-1')
      document.querySelector('.monitor-image').classList.remove('pixel-2')
      document.querySelector('.monitor-image').classList.remove('pixel-3')
      switcher = false
    }
  })

  document.querySelector('.button-right01').addEventListener('click', function () {
    if (switcher) {
      var pixelNum = num % 3 + 1
      var pixelPreNum = (num + 2) % 3 + 1
      num ++
      document.querySelector('.sound').play()
      document.querySelector('.monitor-image').classList.remove(`pixel-${pixelPreNum}`)
      document.querySelector('.monitor-image').classList.add(`pixel-${pixelNum}`)
    }
  })
}
