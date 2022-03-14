/* DELEGATE EVENTS */

//06 Al hacer click en el elemento reconocemos cual es y lo rotamos
const $options = document.getElementById("options");
let countChance = 1;
//Variable que habilita contenedor de cartas
let activeContainerCards = 0;
let answerCorrect = 0;
let activeCardOptionOrder = 1;
// Variable para cambiar mensajes
let msj;

$options.addEventListener("click", (e) => {
  if (!e.target.matches("#options")) {
    //Las cartas se activan despues de dar vuelta a Dina y Teo
    if (activeContainerCards === 1) {
      //1 habilita para poder voltear otra tarjeta
      if (activeCardOptionOrder === 1) {
        //verifica si tiene una opcion mas
        if (countChance <= 2) {
          activeCardOptionOrder = 0;
          if (e.target.matches(".one") || e.target.matches(".oneImg")) {
            document.getElementById("frontOne").classList.add("rotarfront");
            document.getElementById("backOne").classList.add("mostrarBack");
            if (1 === positionPlaceValue) {
              correctAnswer = true;
            } else {
              correctAnswer = false;
            }
            toTurnCardOne();
          }

          // Verifica si es la tarjeta Dos
          if (e.target.matches(".two") || e.target.matches(".twoImg")) {
            document.getElementById("frontTwo").classList.toggle("rotarfront");
            document.getElementById("backTwo").classList.toggle("mostrarBack");
            if (2 === positionPlaceValue) {
              correctAnswer = true;
            } else {
              correctAnswer = false;
            }
            toTurnCardTwo();
          }
          if (e.target.matches(".three") || e.target.matches(".threeImg")) {
            document.getElementById("frontThree").classList.add("rotarfront");
            document.getElementById("backThree").classList.add("mostrarBack");
            if (3 === positionPlaceValue) {
              correctAnswer = true;
            } else {
              correctAnswer = false;
            }
            toTurnCardThree();
          }
          if (e.target.matches(".four") || e.target.matches(".fourImg")) {
            document.getElementById("frontFour").classList.add("rotarfront");
            document.getElementById("backFour").classList.add("mostrarBack");
            if (4 === positionPlaceValue) {
              correctAnswer = true;
            } else {
              correctAnswer = false;
            }
            toTurnCardFour();
          }
          if (e.target.matches(".five") || e.target.matches(".fiveImg")) {
            document.getElementById("frontFive").classList.add("rotarfront");
            document.getElementById("backFive").classList.add("mostrarBack");
            if (5 === positionPlaceValue) {
              correctAnswer = true;
            } else {
              correctAnswer = false;
            }

            toTurnCardFive();
          }

          answerUser();
          countChance++;
        }
      }
    }
  }
});

// Verificamos la respuesta cuando el usuario selecciona una tarjeta
const answerUser = () => {
  if (correctAnswer === true) {
    soundCorrect.play();

    setTimeout(() => {
      updateAnswerStarts("correct");

      resetOptions();
      countChance = countChance + 2;
      msjCorretAnswer();
    }, 300);
  } else {
    soundIncorrect.play();
    if (countChance === 2) {
      setTimeout(() => {
        updateAnswerStarts("wrong");
        resetOptions();
      }, 500);
    } else {
      setTimeout(() => {
        msjOneOption();
        activeContainerCards = 1;
      }, 400);
    }
  }
};

const resetOptions = () => {
  setTimeout(() => {
    //Aqui verifica el total de preguntas para mostrar la pantalla final
    endGame();
    if (numbersQuestions === parseInt(totalQuestion)) {
      setTimeout(() => {
        document
          .getElementById("screenStart")
          .classList.add("screenStart--active");
        createStarEnd();
        document
          .getElementById("textEndGame")
          .classList.toggle("textEndGame--hide");
        document
          .getElementById("btnRefrech")
          .classList.toggle("btnRefrech--hide");
        document
          .getElementById("container__endGame")
          .classList.toggle("endGame--hide");
        document
          .getElementById("container__endGame")
          .classList.toggle("container__endGame--border");
        soundAmbient.play();
      }, 1000);

      //Vamos a ocultar los contenedores mensaje, DinaTeo y tarjetas de opciones
    } else {
      rotateDina();
      rotateTeo();
      setTimeout(() => {
        postToTurnDinaGame();
      }, 1000);

      countChance = 1;
      activeContainerCards = 0;
      activarCardDina = 0;
      activarCardTeo = 0;
      numbersQuestions = numbersQuestions + 1;
    }
  }, 1000);
};

//Voltear tarjetas
const toTurnCardOne = () => {
  setTimeout(() => {
    document.getElementById("frontOne").classList.toggle("rotarfront");
    document.getElementById("backOne").classList.toggle("mostrarBack");
    document.getElementById("onePositionNumber").textContent = "0";
    activeCardOptionOrder = 1;
  }, 1000);
};
const toTurnCardTwo = () => {
  setTimeout(() => {
    document.getElementById("frontTwo").classList.toggle("rotarfront");
    document.getElementById("backTwo").classList.toggle("mostrarBack");
    document.getElementById("twoPositionNumber").textContent = "0";
    activeCardOptionOrder = 1;
  }, 1000);
};

const toTurnCardThree = () => {
  setTimeout(() => {
    document.getElementById("frontThree").classList.toggle("rotarfront");
    document.getElementById("backThree").classList.toggle("mostrarBack");
    document.getElementById("threePositionNumber").textContent = "0";
    activeCardOptionOrder = 1;
  }, 1000);
};

const toTurnCardFour = () => {
  setTimeout(() => {
    document.getElementById("frontFour").classList.toggle("rotarfront");
    document.getElementById("backFour").classList.toggle("mostrarBack");
    document.getElementById("fourPositionNumber").textContent = "0";
    activeCardOptionOrder = 1;
  }, 1000);
};

const toTurnCardFive = () => {
  setTimeout(() => {
    document.getElementById("frontFive").classList.toggle("rotarfront");
    document.getElementById("backFive").classList.toggle("mostrarBack");
    document.getElementById("fivePositionNumber").textContent = "0";
    activeCardOptionOrder = 1;
  }, 1000);
};

const removeColorTrue = () => {
  document.getElementById("backOne").classList.remove("optionsBack--true");
  document.getElementById("backTwo").classList.remove("optionsBack--true");
  document.getElementById("backThree").classList.remove("optionsBack--true");
  document.getElementById("backFour").classList.remove("optionsBack--true");
  document.getElementById("backFive").classList.remove("optionsBack--true");
  document.getElementById("onePositionNumber").textContent = "0";
  document.getElementById("twoPositionNumber").textContent = "0";
  document.getElementById("threePositionNumber").textContent = "0";
  document.getElementById("fourPositionNumber").textContent = "0";
  document.getElementById("fivePositionNumber").textContent = "0";
};

const addColorFalse = () => {
  document.getElementById("backOne").classList.add("optionsBack--false");
  document.getElementById("backTwo").classList.add("optionsBack--false");
  document.getElementById("backThree").classList.add("optionsBack--false");
  document.getElementById("backFour").classList.add("optionsBack--false");
  document.getElementById("backFive").classList.add("optionsBack--false");
};
