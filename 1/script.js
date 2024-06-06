const linkElement = document.querySelector("a");
let hasBeenClicked = false;

linkElement.addEventListener("click", (event) => {
  event.preventDefault();

  linkElement.style.color = "grey";
  hasBeenClicked = true;
});

linkElement.addEventListener("mouseover", () => {
  linkElement.style.color = "green";
  linkElement.style.textDecoration = "underline";
});

linkElement.addEventListener("mouseout", () => {
  linkElement.style.color = hasBeenClicked ? "grey" : "black";
  linkElement.style.textDecoration = "none";
});

linkElement.addEventListener("mousedown", () => {
  linkElement.style.color = "blue";
  linkElement.style.textDecoration = "none";
});
