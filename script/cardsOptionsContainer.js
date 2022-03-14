// const $cardsOptionsContainer = document.getElementById("cardsOptionContainer");

//07 crear tarjetas de opciones de manera automaticamente

// for (let i = 1; i <= 5; i++) {
//   let cardFront = document.createElement("div");
//   cardFront.setAttribute("id", "cardsOptionsAnswer");
//   cardFront.classList.add("cardsOptionsAnswer");
//   $cardsOptionsContainer.appendChild(cardFront);
// }

// Una vez creado los hijos creamos los elementos de cada hijo -->
// const $optionsCardsAsnwer = document.querySelectorAll("#cardsOptionsAnswer");
// $optionsCardsAsnwer.forEach((e, index) => {
//   //Creado tarjeta frontal
//   const front = document.createElement("a");
//   front.classList.add("cardFront");
//   const imgLupa = " <img class = 'oneImg' src='img/lupa-logo.svg' alt='' />";
//   front.innerHTML = imgLupa;
//   let $imgCard = document.querySelector(".cardImg");
//   $cardsOptionsContainer.children[index].appendChild(front);

//   // Creando tarjeta trasera
//   const back = document.createElement("div");
//   back.classList.add("cardBack");
//   back.innerHTML = "<h2>Hol</h2>";
//   $cardsOptionsContainer.children[index].appendChild(back);
// });

//Delegacion de envento a las tarjetas seleccionadas

// $cardsOptionsContainer.childNodes.forEach((elemento) => {
//   elemento.addEventListener("click", (e) => {
//     e.target.classList.toggle("rotarCardfront");
//   });
// });

// $cardsOptionsContainer.addEventListener("click", (e) => {
//   console.log(e);
// });

// $optionsCardsAsnwer.addEventListener("click", (e) => {
//   e.target.classList.toggle("rotarCardfront");
// });

// $cardsOptionsContainer.addEventListener("click", (e) => {
//   console.log(e);
// });
