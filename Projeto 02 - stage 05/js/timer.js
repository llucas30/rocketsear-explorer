import Sounds from './sounds.js'
import {
  buttonPlay,
  buttonPause,
} from './elements.js'

const sounds = Sounds()

export default function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateTimer(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateTimer(minutes, 0)
    clearTimeout(timerTimeOut)
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function pause() {
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if (minutes == 0 && seconds == 0) {
        sounds.kitchenTimer.play()
        reset()
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
    updateTimer(
      Number(minutesDisplay.textContent) + 5,
      secondsDisplay.textContent
    )
  }

  function less() {
    if (Number(minutesDisplay.textContent) <= 5) {
      return
    }
    // minutes -= 5
    updateTimer(
      Number(minutesDisplay.textContent) - 5,
      secondsDisplay.textContent
    )
  }

  return {
    countdown,
    less,
    more,
    updateTimer,
    reset,
    pause
  }
}
