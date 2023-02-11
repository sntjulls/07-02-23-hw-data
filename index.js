"use strict";

const buttons = document.querySelectorAll(".btns-container button");

for (const button of buttons) {
  button.addEventListener(
    "click",
    ({
      target: {
        parentElement,
        dataset: { direction },
      },
    }) => {
      for (const inactive of buttons) {
        if (inactive.hasAttribute("data-one")) {
          inactive.style.backgroundColor = "#fff";
          inactive.style.color = "#000000";
        }
      }
      button.style.backgroundColor = "#4fc2f8";
      button.style.color = "#fff";
      parentElement.nextElementSibling.style.flexDirection = direction;
    }
  );
}
