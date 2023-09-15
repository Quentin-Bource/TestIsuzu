// Fonction playVideo Intro

let vid = document.getElementById("myVideo"); 
                    
function togglePlayPause() {
    
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  }



  let mapWrapper = document.querySelector('.map');
  let alertDiv = document.querySelector('.alert');
  
  function alertClick() {
      if (alertDiv.style.display === 'none' || alertDiv.style.display === '') {
          alertDiv.style.display = 'block';
          document.getElementById('googleMapsBtn').style.display = 'block'; 
          document.getElementById('route').style.display = 'none'; 
      } else {
          alertDiv.style.display = 'none';
          document.getElementById('googleMapsBtn').style.display = 'none'; 
          document.getElementById('route').style.display = 'block'; 
      }
  }
