`use strict`;

// First we declare any variables and functions that we'll need to be able to call regardless of the eventlistener we're working in

let thankYouContainer = document.querySelector(`.thank-you-container`);
thankYouContainer.style.display = `none`;

let clickedButton = function (selectedNumber) {
  selected = selectedNumber;
  return selected;
};

let selectedOne = clickedButton(1);
let selectedTwo = clickedButton(2);
let selectedThree = clickedButton(3);
let selectedFour = clickedButton(4);
let selectedFive = clickedButton(5);

// created click functions that will save the selected input and change the thank you page's results based on whatever function is being executed

document.querySelector(`.button-one`).addEventListener(`click`, function () {
  if (selectedOne) {
    document.querySelector(
      `.selected-rating`
    ).textContent = `You've selected 1 out of 5`;
  }
});
document.querySelector(`.button-two`).addEventListener(`click`, function () {
  clickedButton(2);
  if (selectedTwo) {
    document.querySelector(
      `.selected-rating`
    ).textContent = `You've selected 2 out of 5`;
  }
});
document.querySelector(`.button-three`).addEventListener(`click`, function () {
  clickedButton(3);
  if (selectedThree) {
    document.querySelector(
      `.selected-rating`
    ).textContent = `You've selected 3 out of 5`;
  }
});
document.querySelector(`.button-four`).addEventListener(`click`, function () {
  clickedButton(4);
  if (selectedFour) {
    document.querySelector(
      `.selected-rating`
    ).textContent = `You've selected 4 out of 5`;
  }
});
document.querySelector(`.button-five`).addEventListener(`click`, function () {
  clickedButton(5);
  if (selectedFive) {
    document.querySelector(
      `.selected-rating`
    ).textContent = `You've selected 5 out of 5`;
  }
});

// the load page function was placed at the end because it's the last action being performed on this project and will allow the other previous eventhandlers to update the information prior to it being loaded.

function loadPage() {
  document.querySelector(`.container`).style.display = `none`;
  thankYouContainer.style.display = ``;
}

// My first time writing a responsive page from scratch using vanilla JS, html, and css all on my own. Any feedback is appreciated !
