const inputEl = document.querySelector("#email");
const btn = document.querySelector("#submit");
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const iconErrorEl = document.querySelector(".icon-error");
const textErrorEl = document.querySelector(".text-error");
const fromGroupEl = document.querySelector(".form-group");
const inputE1 = document.querySelector(".input-box");
let errors = [];

btn.addEventListener("click", (e) => {
  // remove success class
  textErrorEl.classList.remove("text-success");

  // reset errors
  errors = [];

  // validate email address
  const email = inputEl.value;

  if (email == "" || email === undefined) {
    errors.push("Please provide us your email");
    // show error icon
    iconErrorEl.style.display = "block";
    inputE1.style.border = "1px solid var(--clr-primary-red-800)";
    textErrorEl.innerText = errors[0];
  } else if (!email.match(RegEmail)) {
    errors.push("Please provide us your valid email");
    // show error icon
    iconErrorEl.style.display = "block";
    inputE1.style.border = "1px solid var(--clr-primary-red-800)";
    textErrorEl.innerText = errors[0];
  } else {
    // hide error icon
    iconErrorEl.style.display = "none";
    textErrorEl.classList.add("text-success");
    textErrorEl.innerText = "Thank you for subscribing to our newsletter.";
    inputE1.style.border = "1px solid #44d838";
    // reset input value
    inputEl.value = "";
  }
});

inputEl.addEventListener("keydown", (e) => {
  // check if enter key is pressed
  if (e.keyCode === 13) {
    // validate email address
    const email = inputEl.value;

    if (email == "" || email === undefined) {
      errors.push("Please provide us your email");
      // show error icon
      iconErrorEl.style.display = "block";
      inputE1.style.border = "1px solid var(--clr-primary-red-800)";
      textErrorEl.innerText = errors[0];
    } else if (!email.match(RegEmail)) {
      errors.push("Please provide us your valid email");
      // show error icon
      iconErrorEl.style.display = "block";
      inputE1.style.border = "1px solid var(--clr-primary-red-800)";
      textErrorEl.innerText = errors[0];
    } else {
      // hide error icon
      iconErrorEl.style.display = "none";
      textErrorEl.classList.add("text-success");
      textErrorEl.innerText = "Thank you for subscribing to our newsletter.";
      inputE1.style.border = "1px solid #44d838";
      // prevent default action of form
      e.preventDefault();

      // reset input value
      inputEl.value = "";
    }
  }
});
