const btnEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

function getRandomHexColor() {
  return (document.body.style.background = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
}

btnEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  // body.style.background = color;
  document.body.style.backgroundColor = color;
  textEl.bodyChangedColor.textContent = color;

});