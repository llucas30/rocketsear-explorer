import {
  minutesDisplay, 
  secondsDisplay
} from './elements.js'
import Timer from './timer.js'
import Sounds from './sounds.js'
import Events from './events.js'

const timer = Timer({ minutesDisplay, secondsDisplay })
const sounds = Sounds()

Events({timer, sounds})