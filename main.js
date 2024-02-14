let container = document.querySelector("#game-container");
let buttondemarer = document.querySelector("#start-button");
let scoreValue = document.querySelector("#score-value");
let trousTaupe = document.querySelector("#playground");

let scorePlus = document.querySelector("#score");
let score = 0;
let time = 30;
let timeLet = document.querySelector("#scoretime");
let setTimer;
let image = document.querySelectorAll('.case img');

function taupeAttrape(E) {
  attrape = E.target;
  attrape.parentNode.classList.add("taucher");
  score += 1;
  scorePlus.innerHTML = score; //A essayer
}

for (let i = 0; i < image.length; i++) {
   image[i].addEventListener('click', taupeAttrape);

}

function timer() {
  if (time) {
    time -= 1;
    timeLet.innerHTML = time;
  } else {
    restart();
  }
}

// soustraction de la somme score =30
function restart() {
  modalText.innerHTML = "votre est de " + score;
  time = 30;
  score = 0;
  scorePlus.innerHTML = score;
  timeLet.innerHTML = time;
}
 

function apparitionImage() {
  let sourcesId = [
    "col1",
    "col2",
    "col3",
    "col4",
    "col5",
    "col6",
    "col7",
    "col8",
    "col9",
  ];

  // Supprimer l'image précédente en réinitialisant le src de toutes les images
  sourcesId.forEach((id) => {
    document.getElementById(id).querySelector("img").src = ""; // Supprime l'ancienne image
  });

  // Choisir une nouvelle case au hasard pour l'image
  let indexAuHasard = Math.floor(Math.random() * sourcesId.length);
  let selectedCase = document
    .getElementById(sourcesId[indexAuHasard])
    .querySelector("img");
  selectedCase.src = "../souris.jpg"; // Assurez-vous que le chemin est correct

}
apparitionImage();
setInterval(apparitionImage, 1000);
