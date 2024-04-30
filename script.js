const audio = document.getElementById("bgm");
const door = document.getElementById("door");

// Fungsi untuk memainkan audio
function playAudio() {
  audio.play();
}

playAudio();

function playDoor() {
  door.play();
}

// effect door
const clickDoor = document.querySelectorAll(".effect");

clickDoor.forEach((e) => {
  e.addEventListener("click", playDoor);
});

// Menu
const start = document.querySelector("#start");
const mute = document.querySelector("#mute");
const credit = document.querySelector("#credit");
const quit = document.querySelector("#quit");
// Page
const credits = document.querySelector("#credits");
const level = document.querySelector("#level");

// Mute
function toggleAudio() {
  if (audio.paused) {
    audio.play(); // Putar audio jika sedang di-pause
  } else {
    audio.pause(); // Jeda audio jika sedang diputar
  }
}
mute.addEventListener("click", toggleAudio);

// Start
const menu = document.querySelector("#menu");
start.addEventListener("click", () => {
  menu.style.display = "none";
  credit.style.display = "none";
  level.style.display = "block";
});

// credit
credit.addEventListener("click", () => {
  menu.style.display = "none";
  level.style.display = "none";
  credits.style.display = "block";
});

// Rintangan lvl
const dangerBox = document.querySelector("#dangerBox");
const scream = document.querySelector("#scream");

dangerBox.addEventListener("click", () => {
  scream.play();
});
