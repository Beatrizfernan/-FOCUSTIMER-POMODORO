import {
    
    forestButton,
    rainButton,
    coffeeShopButton,
    firePlaceButton,
    volForest,
    volRain,
    volCoffeeShop,
    volFirePlace,
  } from "./elements.js";
  
  export function Events({ soundControls, sounds }) {
   
  
    forestButton.addEventListener("click", function () {
      soundControls.forestSound();
    });
  
    rainButton.addEventListener("click", function () {
      soundControls.rainSound();
    });
  
    coffeeShopButton.addEventListener("click", function () {
      soundControls.coffeeShopSound();
    });
  
    firePlaceButton.addEventListener("click", function () {
      soundControls.firePlaceSound();
    });
  
    volForest.addEventListener("input", function () {
      sounds.forestAudio.volume = volForest.value;
    });
  
    volRain.addEventListener("input", function () {
      sounds.rainAudio.volume = volRain.value;
    });
  
    volCoffeeShop.addEventListener("input", function () {
      sounds.coffeeShopAudio.volume = volCoffeeShop.value;
    });
  
    volFirePlace.addEventListener("input", function () {
      sounds.firePlaceAudio.volume = volFirePlace.value;
    });
  }
