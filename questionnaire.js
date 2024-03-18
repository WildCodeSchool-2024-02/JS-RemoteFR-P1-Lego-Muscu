const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


const reponses = document.querySelectorAll('input[type="radio"]');

adopte.addEventListener('click', () => {
  let compteurA = 0;
  let compteurB = 0;
  let compteurC = 0;
  let compteurD = 0;

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
  console.log(`A = ${compteurA}, B =${compteurB}, c = ${compteurC}, d = ${compteurD}`);
});


// selon le nombre de reponse similaire = assigne un coach 
// retour = donne un coach si x a maeva , si x b seb, si x c nico et si x d angélina

// switch case : si xa = nsj si xb = dnkzd ...