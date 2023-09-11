// Fonction playVideo Intro

let vid = document.getElementById("myVideo"); 
                    
function togglePlayPause() {
    
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  }