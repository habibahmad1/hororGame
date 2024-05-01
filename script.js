const audio = document.getElementById("bgm");
const door = document.getElementById("door");
const bgm = document.getElementById("danger");
const win = document.getElementById("win");

document.addEventListener("DOMContentLoaded", function () {
  audio.play();
});

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
  audio.pause();
  bgm.play();
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
const imgZonk = document.querySelector(".imgZonk");
const imgAman = document.querySelector(".imgAman");
const boxAll = document.querySelectorAll(".box");
const zonk = Math.floor(Math.random() * boxAll.length) + 0;

let remainingItems = boxAll.length;

boxAll.forEach((item, index) => {
  item.addEventListener("click", () => {
    door.play();
    if (index == zonk) {
      scream.play();
      imgZonk.style.display = "flex";
      setTimeout(() => {
        window.location.reload();
      }, 5000);
      bgm.pause();
      audio.play();
    } else {
      item.src = "./img/aman.png";
    }
    remainingItems--;
    if (remainingItems === 1) {
      scream.pause();
      imgZonk.style.display = "none";
      win.play();
      alert("Anda Menang!");
      window.location.reload();
    }
  });
});

// Back to Menu
const hantuMenu = document.querySelector(".ghost1");

hantuMenu.addEventListener("click", () => {
  level.style.display = "none";
  menu.style.display = "block";
  credit.style.display = "block";
  audio.play();
  bgm.pause();
});
