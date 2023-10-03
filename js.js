// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const lightModeIcon = document.querySelector(".material-symbols-outlined.light_mode");
    const body = document.body;
  
    // Check if the user has a preferred mode in local storage
    const preferredMode = localStorage.getItem("preferredMode");
    if (preferredMode === "dark") {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  
    // Function to enable light mode
    function enableLightMode() {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("preferredMode", "light");
    }
  
    // Toggle between light and dark mode when the light_mode icon is clicked
    lightModeIcon.addEventListener("click", function () {
      if (!body.classList.contains("light-mode")) {
        enableLightMode();
      }
    });
  });


  function player(name,marker){
    this.name=name
    this.marker=marker
  }