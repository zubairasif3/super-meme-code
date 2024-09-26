const parallaxBG = document.getElementById("parallax");
const parallaxBGTwo = document.getElementById("parallaxTwo");
const parallaxMyro = document.getElementById("parallaxMyro");
// const parallaxToshi = document.getElementById("parallaxToshi");
// const parallaxCoins = document.getElementById("parallaxCoins");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallaxBG.style.backgroundPositionY = "-" + offset * 0.1 + "px";

  parallaxBGTwo.style.backgroundPositionY = offset * 0.1 + "px";

  // Myro Parallax
  parallaxMyro.style.top = offset * 0.16 + "px";

  // parallaxToshi.style.top = "-" + offset * 0.1 + "px";

  // parallaxCoins.style.top = offset * 0.11 + "px";
});

// Audio Player
$(document).ready(function () {
  var audio = $("#audio")[0];
  var playPauseButton = $("#play-pause");
  // var progressBar = $('.progress');
  var bars = $(".bar");

  playPauseButton.click(function () {
    if (audio.paused) {
      audio.play();
      playPauseButton.html('<img src="assets/images/pause.svg" alt="Icon" />'); // Change button to pause symbol
    } else {
      audio.pause();
      playPauseButton.html('<img src="assets/images/play.svg" alt="Icon" />'); // Change button to play symbol
    }
  });

  // audio.ontimeupdate = function() {
  //     var progress = (audio.currentTime / audio.duration) * 100;
  //     progressBar.css('width', progress + '%');
  // };
  audio.ontimeupdate = function () {
    var progress = (audio.currentTime / audio.duration) * 100;
    var barsToFill = Math.floor(progress / 6); // Calculate number of bars to fill
    bars.css("background-color", "#8085A0"); // Reset all bars
    for (var i = 0; i < barsToFill; i++) {
      $(bars[i]).css("background-color", "white");
    }
  };

  audio.onended = function () {
    playPauseButton.html('<img src="assets/images/play.svg" alt="Icon" />'); // Reset to play symbol when audio ends
    // progressBar.css('width', '0%');
    bars.css("background-color", "#8085A0");
  };
});

// Live Match Slider
$(".live-match-slider").owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  dots: false,
  navText: [
    "<div class='left-nav'><img src='assets/images/left-icon.webp' alt='icon' /></div>",
    "<div class='right-nav'><img src='assets/images/right-icon.webp' alt='icon' /></div>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: false,
    },
    1100: {
      items: 3,
      nav: true,
    },
    1400: {
      items: 4,
      nav: true,
    },
  },
});

// Road Map Slider
$(".roadmap-slider").owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  dots: false,
  nav: true,
  navText: [
    "<div class='left-nav'><img src='assets/images/left-icon.webp' alt='icon' /></div>",
    "<div class='right-nav'><img src='assets/images/right-icon.webp' alt='icon' /></div>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1100: {
      items: 2,
    },
    1400: {
      items: 2,
    },
  },
});
document.addEventListener("DOMContentLoaded", function () {
  const modalButton = document.getElementById("openModalBtn");
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("closeModalBtn");
  const video = document.querySelector("video"); // Select the video element

  modalButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    openModal();
  });

  closeButton.addEventListener("click", function () {
    closeModal();
  });

  modal.addEventListener("click", function (event) {
    const modalContent = document.querySelector(".modal-content");
    if (!modalContent.contains(event.target)) {
      closeModal();
    }
  });

  function openModal() {
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    video.pause(); // Pause the video when modal closes
    video.currentTime = 0; // Optionally reset video to start
  }
});




$('#downloadFileBtn').on('click', function() {
  // Create a hidden <a> element and trigger its download functionality
  var link = document.createElement('a');
  link.href = './assets/Fightpaper_v1.0.pdf';  // Direct URL to your PDF file
  link.download = 'Fightpaper_v1.0.pdf';  // Desired file name for download
  document.body.appendChild(link);  // Append the link to the DOM
  link.click();  // Trigger the download
  document.body.removeChild(link);  // Remove the link from the DOM
});