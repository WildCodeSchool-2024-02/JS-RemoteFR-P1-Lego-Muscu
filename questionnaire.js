/* MENU BURGER*/
const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


/* QUESTIONNAIRE*/

const reponses = document.querySelectorAll('input[type="radio"]');

let compteurA = 0;
let compteurB = 0;
let compteurC = 0;
let compteurD = 0;

const openPopup = document.getElementById("adopte");

const popupMaeva = document.getElementById("popup-maeva");
const popupSebastien = document.getElementById("popup-sebastien");
const popupNicolas = document.getElementById("popup-nicolas");
const popupAngelina = document.getElementById("popup-angelina");
const popupAutre = document.getElementById("popup-autre");

const closePopupMaeva = document.getElementById("close-popupA");
const closePopupSebastien = document.getElementById("close-popupB");
const closePopupNicolas = document.getElementById("close-popupC");
const closePopupAngelina = document.getElementById("close-popupD");
const closePopupAutre = document.getElementById("close-popupE");


adopte.addEventListener('mouseup', () => {

  reponses.forEach((reponse) => {
    if (reponse.checked) {
      if (reponse.value === "a") {
        compteurA++;
      }
    else if (reponse.value === "b") {
      compteurB++;
    }
    else if (reponse.value === "c") {
      compteurC++;
    }
    else if (reponse.value === "d") {
      compteurD++;
    }
    }
  })

  function coachIdentite(){
    if (compteurA > compteurB && compteurA > compteurC && compteurA > compteurD){
      openPopup.addEventListener("click", function(){
        popupMaeva.style.display= "block"; 
      });
       closePopupMaeva.addEventListener("click", function(){
        popupMaeva.style.display= "none";
      });
    }
    
    else if (compteurB > compteurA && compteurB > compteurC && compteurB > compteurD){
      openPopup.addEventListener("click", function(){
        popupSebastien.style.display= "block"; 
      });
      closePopupSebastien.addEventListener("click", function(){
        popupSebastien.style.display= "none";
      });
    }
    
    else if (compteurC > compteurA && compteurC > compteurB && compteurC > compteurD){
      openPopup.addEventListener("click", function(){
        popupNicolas.style.display= "block"; 
      });
      closePopupNicolas.addEventListener("click", function(){
        popupNicolas.style.display= "none";
      });
    }
    
    else if (compteurD > compteurA && compteurD > compteurB && compteurD > compteurC){
      openPopup.addEventListener("click", function(){
        popupAngelina.style.display= "block"; 
      });
      closePopupAngelina.addEventListener("click", function(){
        popupAngelina.style.display= "none";
      });
    }
    
    else {
      openPopup.addEventListener("click", function(){
        popupAutre.style.display= "block"; 
      });
      closePopupAutre.addEventListener("click", function(){
        popupAutre.style.display= "none";
      });
    }
  }
  coachIdentite();
});


// Rafraîchir la page quand on fait ok sur le popup

closePopupMaeva.addEventListener('mouseup', () => {
  location.reload();
});

closePopupSebastien.addEventListener('mouseup', () => {
  location.reload();
});

closePopupNicolas.addEventListener('mouseup', () => {
  location.reload();
});

closePopupAngelina.addEventListener('mouseup', () => {
  location.reload();
});

closePopupAutre.addEventListener('mouseup', () => {
  location.reload();
});