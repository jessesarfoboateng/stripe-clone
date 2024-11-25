function changeButton() {
  let character = document.querySelector(".signed").innerHTML;
  if (character === "Sign in") {
    character = "Signed";
  }
  else {
    character = "Sign in";
  }
document.querySelector(".signed").innerHTML = character;
};