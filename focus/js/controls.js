export function Controls({
    
    lightModeButton,
    darkModeButton,
    body,
  }) {
    function lightMode() {
      lightModeButton.classList.add("hide");
      darkModeButton.classList.remove("hide");
      body.classList.toggle("darkTheme");
      
    }
  
    function darkMode() {
      darkModeButton.classList.add("hide");
      lightModeButton.classList.remove("hide");
      body.classList.toggle("darkTheme");
      
    }
    return {
        
        lightMode,
        darkMode,
      };
    }
