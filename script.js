// get elements form html.
const mainDiv = document.querySelector(".main-div");
const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submitBtn");
const thanksPage = document.querySelector(".thanks-page");
let chosenDemo = document.getElementById("chosenRatingDemo");

// create variable fot chosen rating point.
let chosenRateNum = null;

// write function fot rating buttons.

ratingBtns.forEach((button) => {
  // on clicking button, we add function here.
  button.addEventListener("click", () => {
    // chosen rating saved
    chosenRateNum = button.textContent;
    // changes chosen button's styles.
    button.style.backgroundColor = "var(--pure-white)";
    button.style.color = "var(--dark-blue)";
    //  Remove 'selected' class from all buttons first.
    ratingBtns.forEach((btn) => {
      btn.classList.remove("selected");
    });
  });
});

// we add eventlistener to submit button

submitBtn.addEventListener("click", () => {
  // if customer has chosen rating.
  if (chosenRateNum) {
    chosenDemo.textContent = chosenRateNum;
    // change previous page to thanks page.
    mainDiv.style.display = "none";
    thanksPage.style.display = "flex";
    // if customed didn't choose rating, we alert them to do so.
  } else {
    alert("please choose rating before submitting");
  }
});
