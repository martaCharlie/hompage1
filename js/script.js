console.log("Cześć!:) Jak leci?");

let button = document.querySelector(".button");
let image = document.querySelector(".image");

button.addEventListener("click", () => {
  image.remove();
});

let darkThemeButton = document.querySelector(".darkTheme");
let container = document.querySelector(".container");

darkThemeButton.addEventListener("click", () => {
  container.classList.toggle("whiteBackground");
});

console.log(button);

let number1 = 4;
let number2 = 6;

let message =
  number1 > number2 ? "number1 jest większe" : "number2 nie jest większa";

console.log(message);
