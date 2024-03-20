const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

const image1 = document.querySelector("#toggleImage1");
const text1 = document.querySelector("#toggleText1");


const image2 = document.querySelector("#toggleImage2");
const text2 = document.querySelector("#toggleText2");


const image3 = document.querySelector("#toggleImage3");
const text3 = document.querySelector("#toggleText3");


const image4 = document.querySelector("#toggleImage4");
const text4 = document.querySelector("#toggleText4");


// Ajout d'un écouteur d'événement de clic à l'image
image1.addEventListener("click", function () {
 image1.style.display = "none"; // Cacher l'image
 text1.style.display = "block"; // Afficher le texte
});


image2.addEventListener("click", function () {
 image2.style.display = "none"; // Cacher l'image
 text2.style.display = "block"; // Afficher le texte
});


image3.addEventListener("click", function () {
 image3.style.display = "none"; // Cacher l'image
 text3.style.display = "block"; // Afficher le texte
});


image4.addEventListener("click", function () {
 image4.style.display = "none"; // Cacher l'image
 text4.style.display = "block"; // Afficher le texte
});
// Ajout d'un écouteur d'événement de clic au texte
text1.addEventListener("click", function () {
 text1.style.display = "none"; // Cacher le texte
 image1.style.display = "block"; // Afficher l'image
});


text2.addEventListener("click", function () {
 text2.style.display = "none"; // Cacher le texte
 image2.style.display = "block"; // Afficher l'image
});


text3.addEventListener("click", function () {
 text3.style.display = "none"; // Cacher le texte
 image3.style.display = "block"; // Afficher l'image
});


text4.addEventListener("click", function () {
 text4.style.display = "none"; // Cacher le texte
 image4.style.display = "block"; // Afficher l'image
});
