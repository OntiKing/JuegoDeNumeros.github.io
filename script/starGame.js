const $screenStart__msj = document.getElementById("screenStart__msj");
postToTurnDina();

//Variable para determinar la posicion de la tarjeta correcta
let positionPlaceValue;

/* TARJETAS DINA Y TEO */
const $cardsDinaTeo = document.getElementById("cardsDinaTeo");
let numbersQuestions = 1;
let activarCardDina = 0;
let activarCardTeo = 0;
const placeValue = ["DM", "CM", "C", "D", "U"];

let randomNumber, randomLetter;

/* DELEGATE ELEMENTS */
$cardsDinaTeo.addEventListener("click", (e) => {
  if (e.target.matches(".faceDina") || e.target.matches(".imgDina")) {
    if (activarCardDina === 0) {
      soundEffect.play();
      rotateDina();
      activarCardDina = 1;
      activarCardTeo = 1;
      setTimeout(() => {
        if (numbersQuestions >= 2) {
          postToTurnTeoGame();
        } else {
          postTurnTeo();
        }
      }, 200);
    }
    e.stopPropagation();
  }
  if (e.target.matches(".faceTeo") || e.target.matches(".imgTeo")) {
    if (activarCardTeo === 1) {
      soundEffect.play();
      rotateTeo();
      activarCardTeo = 0;
    }
    e.stopPropagation();
  }
});

// 01 INICIO Funciones para rotar tarjetas de Dina y Teo
const rotateDina = () => {
  generateRandomNumber();
  document.getElementById("frontDina").classList.toggle("rotarDina");
  document.getElementById("backDina").classList.toggle("mostrarDina");
  document.getElementById("imgTeo__Msj").classList.add("imgTeo__Msj--see");
};

const rotateTeo = () => {
  //Eliminar las clases de color de tarjeta

  removeColorTrue();

  //Gener el random y lo agrega una clase para girar la tarjeta
  generateRandomLetter();
  document.getElementById("frontTeo").classList.toggle("rotarTeo");
  document.getElementById("backTeo").classList.toggle("mostrarTeo");
  activeContainerCards = 1;
  //Cuando dina va ser igual a 1 entonces llamamos a las opciones

  //Ocultar mensaje 01
  //minimizar cuadros de tina y teo
  //mostrar mensaje 02
  //mostrar opciones
  //Mostrar estrellas

  reduceAndShowCardsOptions();
  searchPlaceValue();
  document.getElementById("imgTeo__Msj").classList.remove("imgTeo__Msj--see");

  //Muestra mensaje de juego con un delay de 100 para que no se muestre antes de la creacion del documento
  setTimeout(() => {
    postChooseCard();
  }, 100);
  document
    .getElementById("starContainer")
    .classList.remove("starContainer--activo");
};
//02 Genera los numeros
const generateRandomNumber = () => {
  randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
  document.getElementById("numberRandom").textContent = randomNumber;
};

//Letras randomicamente
const generateRandomLetter = () => {
  let position = Math.floor(Math.random() * placeValue.length);
  randomLetter = placeValue[position];
  document.getElementById("letterRandom").textContent = randomLetter;
  insertCardLetter();
};
// 03 Despues de generar los nuemros y letras compara la letra e
// inserta el numero en la tarjeta correcta y le asinga un color
const insertCardLetter = () => {
  switch (randomLetter) {
    case "DM":
      // posición 1
      document.getElementById("onePositionNumber").textContent = randomNumber;
      document.getElementById("backOne").classList.add("optionsBack--true");
      // document.getElementById("backOne").classList.add("optionsBack--true");

      break;
    case "CM":
      document.getElementById("twoPositionNumber").textContent = randomNumber;
      document.getElementById("backTwo").classList.add("optionsBack--true");
      // document.getElementById("backTwo").classList.add("optionsBack--true");

      break;
    case "C":
      document.getElementById("threePositionNumber").textContent = randomNumber;
      document.getElementById("backThree").classList.add("optionsBack--true");
      // document.getElementById("backThree").classList.add("optionsBack--true");
      break;
    case "D":
      document.getElementById("fourPositionNumber").textContent = randomNumber;
      document.getElementById("backFour").classList.add("optionsBack--true");
      // document.getElementById("backFour").classList.add("optionsBack--true");
      break;
    case "U":
      document.getElementById("fivePositionNumber").textContent = randomNumber;
      document.getElementById("backFive").classList.add("optionsBack--true");
      // document.getElementById("backFive").classList.add("optionsBack--true");
      break;
    default:
      console.log(
        "Lo lamentamos, por el momento no disponemos de " + expr + "."
      );
  }
};

//04 aqui reducimos la tarjeta Dina y Teo y mostramos la tarjeta de opiciones
const reduceAndShowCardsOptions = () => {
  document
    .getElementById("logobook--reduceSize")
    .classList.add("logobook--reduceSize");
  document.getElementById("cardDina").classList.add("cardDina--reduceSize");
  document.getElementById("cardTeo").classList.add("cardteo--reduceSize");
  document
    .getElementById("cardsDinaTeo")
    .classList.add("cardsDinaTeoGapreduce");

  setTimeout(() => {
    // Oculta el mensaje incial de Dina y Teo
    document
      .getElementById("screenStart__msj")
      .classList.add("screenStart__msj--display");
    monstraMensaje();
    document.getElementById("options").classList.add("options");
  }, 100);
};

//Creando Estrellas
createStarts();

//05 busca la posicion del elemento encontrado y le suma 1 para poder controlar las posiciones del 1 al 5
const searchPlaceValue = () => {
  let buscar = (elemento) => elemento === randomLetter;
  positionPlaceValue = placeValue.findIndex(buscar);

  positionPlaceValue = positionPlaceValue + 1;
};

// Crea el contenedor de mensajes del juego
const monstraMensaje = () => {
  document.getElementById("msjGame").classList.add("msjGame");
};

/* FIN **** *** ***TARJETAS DINA Y TEO */

const $btnRefrech = document.getElementById("btnRefrech");

$btnRefrech.addEventListener("click", () => {
  location.reload();
});
