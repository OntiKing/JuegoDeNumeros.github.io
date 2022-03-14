const postToTurnDina = () => {
  msjDinaTeo = document.querySelector(".msjDinaTeo").innerHTML =
    "Haz click en <span> DINA </span> para descubrir el número";
};

const postTurnTeo = () => {
  msjDinaTeo = document.querySelector(".msjDinaTeo").innerHTML =
    "¡Ahora! haz click en <span> TEO </span> para descubrir la posición";
};

// Mesajes para voltear tarjetas

const msjCorretAnswer = () => {
  document.getElementById("msjGameText").innerHTML =
    "<span> ¡¡ESOOO!! </span> FELICIDADES <span> ";
};

const msjOneOption = () => {
  document.getElementById("msjGameText").innerHTML =
    "Vuelve a intentarlo. Tienes <span> Una </span> oportunidad más";
};

const postToTurnDinaGame = () => {
  document.getElementById("msjGameText").innerHTML =
    "Haz click en <span> DINA </span> para descubrir el numero";
};

const postToTurnTeoGame = () => {
  document.getElementById("msjGameText").innerHTML =
    "¡Ahora! haz click en <span> TEO </span> para descubrir la posición";
};

const postChooseCard = () => {
  document.getElementById("msjGameText").innerHTML =
    "<span> Voltea </span> la <span> tarjeta </span> dónde está este número";
};

const endGame = () => {
  document.getElementById("msjGameText").innerHTML =
    "<span> ¡¡ Felicidades ahora veamos tu resultado !! </span>";
};
