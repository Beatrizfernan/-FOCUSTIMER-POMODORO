import { Sounds } from "./sounds.js";
import { SoundControls } from "./soundControls.js";
import { Events } from "./events.js";
import {
    body,
    lightModeButton,
    darkModeButton,
    playButton,
    pauseButton,
    stopButton,
    plusButton,
    minusButton,
    forestCard,
    rainCard,
    coffeeShopCard,
    firePlaceCard,
    minutesDisplay,
    secondsDisplay,
} from "./elements.js";

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut



lightModeButton.addEventListener('click', function () {
    lightModeButton.classList.add("hide");
    darkModeButton.classList.remove("hide");
    body.classList.toggle("darkTheme");

})

darkModeButton.addEventListener('click', function () {
    darkModeButton.classList.add("hide");
    lightModeButton.classList.remove("hide");
    body.classList.toggle("darkTheme");

})


playButton.addEventListener('click', function () {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    countdown()
})

pauseButton.addEventListener('click', function () {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
    hold()
})
plusButton.addEventListener('click', function () {
    plus()
    updateMinutes(minutes);

})
minusButton.addEventListener('click', function () {
    if (minutes == 0) {
        
        return;
      }
    
    minus()
    updateMinutes(minutes);
})

function updateMinutes() {
    minutes = Number(minutesDisplay.textContent);
  }
stopButton.addEventListener('click', function () {
    reset()
})

function plus() {
    updateTimerDisplay(Number(5) + Number(minutes), 0)

}

function minus() {
    updateTimerDisplay(Number(minutes) - Number(5), 0)

}
function reset() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}


function hold() {
    clearTimeout(timerTimeOut)
}
function countdown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        updateTimerDisplay(minutes, 0)

        if (minutes <= 0) {

            updateTimerDisplay(0, 0)

            return
        }
        if (seconds <= 0) {
            seconds = 60
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))
        countdown()
    }, 1000)
}



  

  const sounds = Sounds();
  
  
  const soundControls = SoundControls({
    forestCard,
    forestAudio: sounds.forestAudio,
    rainCard,
    rainAudio: sounds.rainAudio,
    coffeeShopCard,
    coffeeShopAudio: sounds.coffeeShopAudio,
    firePlaceCard,
    firePlaceAudio: sounds.firePlaceAudio,
  });


  Events({  sounds, soundControls });