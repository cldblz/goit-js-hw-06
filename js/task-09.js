function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color")
const textRef = document.querySelector(".color")

const onBtnClick = () => {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color;
  textRef.textContent = color
}

btn.addEventListener("click", onBtnClick)