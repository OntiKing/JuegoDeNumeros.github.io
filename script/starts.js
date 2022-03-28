// funcion para crear estrellas

const $starContainer = document.getElementById("starContainer");
const $scoreContent = document.getElementById("scoreContent");
const totalQuestion = 8;
let currentQuestion = 0;
let optionsUser = 0;

function createStarts() {
  // const totalQuestion = numbersQuestions;

  for (let i = 0; i < totalQuestion; i++) {
    const indicador = document.createElement("img");
    indicador.src = "img/estrella.svg";
    indicador.classList.add("imgStartsGame");
    $starContainer.appendChild(indicador);
  }
}

//08 esta funcion pinta de color la estrella sea correcta o no
function updateAnswerStarts(markType) {
  if (markType === "correct") {
    $starContainer.children[currentQuestion].classList.toggle(markType);
    currentQuestion = currentQuestion + 1;
    answerCorrect = answerCorrect + 1;
  }
  if (markType === "wrong") {
    $starContainer.children[currentQuestion].classList.toggle(markType);
    currentQuestion = currentQuestion + 1;
  }
}

//09 Crear estrella para el contenedor final
const $score = document.getElementById("score");
const $imgTotalScore = document.getElementById("imgTotalScore");
function createStarEnd() {
  //creamos la imagen final del resultado

  $scoreContent.classList.add("scoreContent");
  document.getElementById("score").textContent = answerCorrect;
  if (answerCorrect <= 3) {
    $imgTotalScore.classList.add("regular");
  } else {
    $imgTotalScore.classList.add("bueno");
  }
}
