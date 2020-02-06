const body = document.querySelector("body");
IMG_NUMBER = 5;

function handleImgLoad() {}

function paintImage(imageNumber) {
  const image = new Image();
  image.src = `../VanilaJS/images/${imageNumber}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
