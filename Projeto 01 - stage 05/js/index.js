import Functions from './functions.js'

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

let minutes = Number(minutesDisplay.textContent)
let timer

const functions = Functions({minutes, timer, minutesDisplay, secondsDisplay})

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  functions.countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  functions.pause()
})

buttonStop.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  functions.resetTimer()
})

buttonPlus.addEventListener('click', function () {
  functions.more()
})

buttonMinus.addEventListener('click', function () {
  functions.less()
})

buttonCoffe.addEventListener('click', function () {
  buttonCoffe.classList.toggle('selected')
  buttonFire.classList.remove('selected')
  buttonForest.classList.remove('selected')
  buttonRain.classList.remove('selected')
  functions.playPauseSounds()
})

buttonFire.addEventListener('click', function () {
  buttonCoffe.classList.remove('selected')
  buttonFire.classList.toggle('selected')
  buttonForest.classList.remove('selected')
  buttonRain.classList.remove('selected')
  functions.playPauseSounds()
})

buttonForest.addEventListener('click', function () {
  buttonCoffe.classList.remove('selected')
  buttonFire.classList.remove('selected')
  buttonForest.classList.toggle('selected')
  buttonRain.classList.remove('selected')
  functions.playPauseSounds()
})

buttonRain.addEventListener('click', function () {
  buttonCoffe.classList.remove('selected')
  buttonFire.classList.remove('selected')
  buttonForest.classList.remove('selected')
  buttonRain.classList.toggle('selected')
  functions.playPauseSounds()
})

export {
  buttonCoffe, 
  buttonFire, 
  buttonForest, 
  buttonRain, 
  buttonPause, 
  buttonPlay
}