import Sound from './sounds.js'
import { buttonCoffe, buttonFire, buttonForest, buttonRain, buttonPlay, buttonPause } from './index.js'

const sound = Sound()

export default function Functions({minutes, timer, minutesDisplay, secondsDisplay}) {

  function updateTimer(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  
  function resetTimer() {
    updateTimer(minutes, 0)
    clearTimeout(timer)
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }
  
  function pause() {
    clearTimeout(timer)
  }
  
  function countdown() {
    timer = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      if (minutes == 0 && seconds == 0) {
        sound.kitchenTimer.play()
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
  
  function playPauseSounds() {
    if (buttonCoffe.classList.contains('selected')) {
      sound.coffeAudio.play()
      sound.fireAudio.pause()
      sound.forestAudio.pause()
      sound.rainAudio.pause()
    } else if (buttonFire.classList.contains('selected')) {
      sound.coffeAudio.pause()
      sound.fireAudio.play()
      sound.forestAudio.pause()
      sound.rainAudio.pause()
    } else if (buttonRain.classList.contains('selected')) {
      sound.coffeAudio.pause()
      sound.fireAudio.pause()
      sound.forestAudio.pause()
      sound.rainAudio.play()
    } else if (buttonForest.classList.contains('selected')) {
      sound.coffeAudio.pause()
      sound.fireAudio.pause()
      sound.forestAudio.play()
      sound.rainAudio.pause()
    } else {
      sound.coffeAudio.pause()
      sound.fireAudio.pause()
      sound.forestAudio.pause()
      sound.rainAudio.pause()
    }
  }

  return {
    playPauseSounds, 
    countdown, 
    less, 
    more, 
    updateTimer, 
    resetTimer, 
    pause
  }
}
