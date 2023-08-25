const timer = new Timer();

//get the buttons:
let playBtnClick = document.getElementById("playBtn");
let instBtnClick = document.getElementById("instBtn");
let overlay = document.getElementById("overlay");
let closebtn = document.getElementById("closebtn");
const blurArea = document.getElementsByClassName("blur");

playBtnClick.addEventListener("click", () => {
  changeImage();
  blurArea[0].style.display = "none";
  timer.start(printTime);
  playSound = new Audio("./sounds/allgame.mp3");
  playSound.volume = 0.3;
  playSound.play();
});

instBtnClick.addEventListener("click", function () {
  overlay.style.display = "block";
});

closebtn.addEventListener("click", function () {
  overlay.style.display = "none";
});


//Find Me
let findMe = document.getElementById("findMe");
let initialPoints = document.querySelector(".countPoints");
let currentImage = document.getElementById("image_section");
let winImage = document.getElementById("winImage");
let notMe = document.getElementById("notMe");
let MeFound = false;
let currentScore = 0;
currentImage.style.backgroundImage = 'url("./images/2_rato.jpeg")';

//Event change color of border, when the correct spot is found.
findMe.addEventListener("click", () => {
  findMe.style.borderColor = "white";
  updateScore();
  playSoundFind = new Audio("./sounds/yupiiii.mp3");
  playSoundFind.volume = 0.9;
  playSoundFind.play();
  MeFound = true;
  setTimeout(function () {
    if (currentScore >= 1) {
      alert("You found me!");
    }
    changeImage();
  }, 500);
});

function updateScore() {
  currentScore += 1;
  initialPoints.innerText = currentScore;
  // console.log(currentScore);
}

notMe.addEventListener("click", () => {
  console.log("not me clicked");
  playSoundNotMe = new Audio("./sounds/notme.mp3");
  playSoundNotMe.volume = 0.9;
  playSoundNotMe.play();
  MeFound = false;
  setTimeout(function () {
    alert("Sorry, not yet!");
  }, 500);
});

//Changing images
let img1 = 'url("./images/2_rato.jpeg")';
let img2 = 'url("./images/3_egg.jpg")';
let img3 = 'url("./images/1_fantasma.jpg")';
let img4 = 'url("./images/4_coracao.jpg")';
let img5 = 'url("./images/finalgame.jpg")';
//texts
let winText = document.getElementById("winText");
let text = document.getElementById("text");

function changeImage() {
  if (currentScore === 0) {
    currentImage.style.backgroundImage = img1;
    findMe.style.borderColor = "transparent";
    findMe.style.right = "740px";
    findMe.style.top = "290px";
    findMe.style.bottom = "32%";
    text.innerHTML = "Where is the mouse?";
  } else if (currentScore === 1) {
    currentImage.style.backgroundImage = img2;
    findMe.style.borderColor = "transparent";
    findMe.style.right = "170px";
    findMe.style.top = "375px";
    findMe.style.bottom = "32%";
    text.innerHTML = "Where is the red egg?";
  } else if (currentScore === 2) {
    currentImage.style.backgroundImage = img3;
    findMe.style.borderColor = "transparent";
    findMe.style.right = "45px";
    findMe.style.top = "230px";
    findMe.style.bottom = "60%";
    text.innerHTML = "Where is the ghost?";
  } else if (currentScore === 3) {
    currentImage.style.backgroundImage = img4;
    findMe.style.borderColor = "transparent";
    findMe.style.right = "340px";
    findMe.style.top = "8px";
    findMe.style.bottom = "22%";
    text.innerHTML = "Where is the tiny heart?";
  } else if (currentScore === 4) {
    currentImage.style.backgroundImage = img5;
    text.style.display = "none";

    winText.innerHTML = " You Win Congrats Sherlock Holmes!!!";
  }
}

// Timer
const minDecElement = document.getElementById("minDec");
const minUniElement = document.getElementById("minUni");
const secDecElement = document.getElementById("secDec");
const secUniElement = document.getElementById("secUni");

function printTime() {
  const sec = printSeconds();
  const min = printMinutes();
}
if (min >= 3) {
  changeImageToImg5();
}

function changeImageToImg5() {
  currentImage.style.backgroundImage = img5;
  text.style.display = "none";
  winText.innerHTML = "GAME OVER!!!";
}

function printMinutes() {
  const printMin = timer.computeTwoDigitNumber(timer.getMinutes());
  minUniElement.innerText = printMin[1];
  minDecElement.innerText = printMin[0];
  console.log(printMin);
}
function printSeconds() {
  const printSec = timer.computeTwoDigitNumber(timer.getSeconds());
  secUniElement.innerText = printSec[1];
  secDecElement.innerText = printSec[0];
  console.log(printSec);
}
