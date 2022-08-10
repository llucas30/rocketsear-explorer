import Sound from './sounds.js'
import Events from './functions.js'

const events = Events()
const sound = Sound()
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe-house')
const buttonFire = document.querySelector('.fireplace')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let seconds = Number(secondsDisplay.textContent)
let minutes = Number(minutesDisplay.textContent)
let timer

function updateTimer(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  updateTimer(minutes, 0)
  clearTimeout(timer)
}

function pause() {
  clearTimeout(timer)
}

function countdown() {
  timer = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes == 0 && seconds == 0) {
      resetTimer()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      minutes--
    }

    updateTimer(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function more() {
  if (Number(minutesDisplay.textContent) >= 55) {
    return
  }
  // minutes += 5
  updateTimer(Number(minutesDisplay.textContent)+5, secondsDisplay.textContent)
}

function less() {
  if (Number(minutesDisplay.textContent) <= 5) {
    return
  }
  // minutes -= 5
  updateTimer(Number(minutesDisplay.textContent)-5, secondsDisplay.textContent)
}

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  pause()
})

buttonStop.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  resetTimer()
})

buttonPlus.addEventListener('click', function () {
  more()
})

buttonMinus.addEventListener('click', function () {
  less()
})

buttonCoffe.addEventListener('click', function () {
  buttonCoffe.classList.toggle('selected')
  buttonFire.classList.remove('selected')
  buttonForest.classList.remove('selected')
  buttonRain.classList.remove('selected')
  events.playPauseSounds()
})

buttonFire.addEventListener('click', function () {
  buttonCoffe.classList.remove('selected')
  buttonFire.classList.toggle('selected')
  buttonForest.classList.remove('selected')
  buttonRain.classList.remove('selected')
  events.playPauseSounds()
})

buttonForest.addEventListener('click', function () {
  buttonCoffe.classList.remove('selected')
  buttonFire.classList.remove('selected')
  buttonForest.classList.toggle('selected')
  buttonRain.classList.remove('selected')
  events.playPauseSounds()
})

buttonRain.addEventListener('click', function () {
  buttonCoffe.classList.remove('selected')
  buttonFire.classList.remove('selected')
  buttonForest.classList.remove('selected')
  buttonRain.classList.toggle('selected')
  events.playPauseSounds()
})

export {
  buttonCoffe, 
  buttonFire, 
  buttonForest, 
  buttonRain
}