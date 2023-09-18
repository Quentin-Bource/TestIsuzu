// Fonction playVideo Intro

let vid = document.getElementById("myVideo"); 
                    
function togglePlayPause() {
    
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  }

  //Afficher et retirer la map

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
  };

  //Menu Navigation Mobile


  function voirNavMobile() {
    var navMobile = document.querySelector('.navMobile');
    navMobile.classList.add('active');
    
}

function cacherNavMobile() {
    var navMobile = document.querySelector('.navMobile');
    navMobile.classList.remove('active');
    
}

document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu img');
    menuIcon.addEventListener('click', voirNavMobile);

    var navMobile = document.querySelector('.navMobile');
    navMobile.addEventListener('click', function(event) {
        if (event.target.classList.contains('navMobile')) {
            cacherNavMobile();
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    var moreBtn = document.querySelector('.more');
    var lessBtn = document.querySelector('.less');
    var viewContent = document.querySelector('.view');
    var btnContent = document.querySelector('.button');

    moreBtn.addEventListener('click', function() {
        btnContent.style.display = 'flex';
        viewContent.style.height = viewContent.scrollHeight + 'px'; // Utilise la hauteur réelle
        moreBtn.style.display = 'none';
        lessBtn.style.display = 'flex';
    });

    lessBtn.addEventListener('click', function() {
        btnContent.style.display = 'none';
        viewContent.style.height = '0';
        moreBtn.style.display = 'flex';
        lessBtn.style.display = 'none';
    });
});

