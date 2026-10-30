// Hamburgermeny: visar och döljer menyn på mobil
const menyKnapp = document.getElementById("meny-knapp");
const meny = document.querySelector(".meny");

menyKnapp.addEventListener("click", function () {
    meny.classList.toggle("oppen");
    const arOppen = meny.classList.contains("oppen");
    menyKnapp.setAttribute("aria-expanded", arOppen);
});