export default function Functions({
  minutesDisplay, 
  secondsDisplay, 
}) {

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

      updateTimer(minutes, 0)

      if (minutes == 0 && seconds == 0) {
        resetTimer()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        seconds--
      }

      updateTimer(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function more() {
    if (minutes == 60) {
      return
    }
    minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
  }

  function less() {
    if (minutes == 0) {
      return
    }
    minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
  }

  return {
    less, 
    more, 
    countdown, 
    pause, 
    resetTimer
  }
}
