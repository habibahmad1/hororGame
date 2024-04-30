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
    mute.textContent = "Pause BGM";
  } else {
    audio.pause(); // Jeda audio jika sedang diputar
    mute.textContent = "Play BGM";
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

// Generate box
const box = document.querySelector(".box");
const boxCount = document.querySelector(".boxCount");

for (let i = 1; i <= 11; i++) {
  const boxBaru = document.createElement("img");
  boxBaru.src = "./img/door.png";
  boxBaru.classList.add("box");

  boxCount.appendChild(boxBaru);
}

// Rintangan lvl
const scream = document.querySelector("#scream");
const boxAll = document.querySelectorAll(".box");

boxAll.forEach((item) => {
  item.addEventListener("click", () => {
    door.play();
  });
});

// Back to Menu
const hantuMenu = document.querySelector(".ghost1");

hantuMenu.addEventListener("click", () => {
  level.style.display = "none";
  menu.style.display = "block";
  credit.style.display = "block";
});
