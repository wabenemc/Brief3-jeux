const init = function() {
// llet container = document.querySelector("#game-container");
let buttonStart = document.querySelector("#start-button");
// let scoreValue = document.querySelector("#score-value");
// let trousTaupe = document.querySelector("#playground");


const params = new URLSearchParams(window.location.search);
const texte = params.get("texte");
const outputElement = document.getElementById("outputText");
//outputElement.textContent = texte;




let apparutionSouris;

let scorePlus = document.querySelector("#score-value");
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
  
  // Récupérer le nom du joueur depuis le localStorage
  let playerName = localStorage.getItem("playerName");

  // Enregistrer le nom et le score dans le localStorage
  localStorage.setItem("playerName", playerName);
  localStorage.setItem("score", score);
  
}

for (let i = 0; i < image.length; i++) {
   image[i].addEventListener('click', taupeAttrape);

}

function timer() {
  if (time >= 1) {
    time -= 1;
    timeLet.innerHTML = time;
  } else {
    // empeche de ga
    restart();
  }
}


// soustraction de la somme score =30
function restart() {
  // modalText.innerHTML = "votre est de " + score;
  time = 30;
  score = 0;
  scorePlus.innerHTML = score;
  timeLet.innerHTML = time;
  

  clearInterval(apparutionSouris);
  clearInterval(setTimer);

  buttonStart.disabled = false;


}


function buttonEnter() {
  // Récupérer le nom du joueur depuis le champ de saisie
  let playerName = document.getElementById("player-name").value;

  // Vérifier si le joueur a saisi un nom valide
  if (!playerName.trim()) {
    alert("Veuillez entrer votre nom !");
    return;
  }

  // Enregistrer le nom du joueur dans le localStorage
  localStorage.setItem("playerName", playerName);

  // Démarrer le jeu
  buttonStart.disabled = true;
  apparutionSouris = setInterval(apparitionImage, 1000);
  setTimer = setInterval(timer, 1000);
}




// function init() {
//   // ...

//   // Récupérer le score et le nom du joueur du localStorage
//   let playerName = localStorage.getItem("playerName");
//   let savedScore = localStorage.getItem("score");

//   // Afficher le score et le nom du joueur dans l'interface utilisateur
//   if (playerName && savedScore) {
//     document.getElementById("player-name").innerText = playerName;
//     document.getElementById("player-score").innerText = savedScore;
//   }
// }


// function restart() {
//   // Demander le nom du joueur
//   let playerName = prompt("Entrez votre nom :");

//   // Vérifier si le joueur a saisi un nom valide
//   if (playerName) {
//     // Enregistrer le score et le nom du joueur dans le localStorage
//     localStorage.setItem("playerName", playerName);
//     localStorage.setItem("score", score);
//   }

//   // Réinitialiser le score et le temps
//   time = 30;
//   score = 0;
//   scorePlus.innerHTML = score;
//   timeLet.innerHTML = time;
  
//   // Arrêter les intervalles
//   clearInterval(apparutionSouris);
//   clearInterval(setTimer);

//   // Activer le bouton de démarrage
//   buttonStart.disabled = false;
// }





// / Ajout de la variable de niveau
    let level = 1; // Niveau par défaut

    // ...

    function buttonEnter() {
        // Récupérer le nom du joueur depuis le champ de saisie
        let playerName = document.getElementById("player-name").value;

        // Vérifier si le joueur a saisi un nom valide
        if (!playerName.trim()) {
            alert("Veuillez entrer votre nom !");
            return;
        }

        // Enregistrer le nom du joueur et le niveau dans le localStorage
        localStorage.setItem("playerName", playerName);
        localStorage.setItem("level", level);

        // Démarrer le jeu en fonction du niveau
        buttonStart.disabled = true;
        apparutionSouris = setInterval(apparitionImage, 1000 / level); // Augmenter la vitesse en fonction du niveau
        setTimer = setInterval(timer, 1000);
    }

    // Fonction pour changer le niveau
    function changeLevel(newLevel) {
        level = newLevel;
        clearInterval(apparutionSouris);
        apparutionSouris = setInterval(apparitionImage, 1000 / level);
    }

    // Exemple de boutons pour changer de niveau
    let levelButtons = document.querySelectorAll(".level-button");
    levelButtons.forEach(button => {
        button.addEventListener("click", function() {
            let newLevel = parseInt(button.dataset.level);
            changeLevel(newLevel);
        });
    });


 
function buttonEnter() {
  buttonStart.disabled = true;
  apparutionSouris = setInterval(apparitionImage, 1000);
  setTimer = setInterval(timer,1000);

}

buttonStart.addEventListener('click', buttonEnter);
console.log(buttonStart);

//local stora


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

} 
window.onload = init;

