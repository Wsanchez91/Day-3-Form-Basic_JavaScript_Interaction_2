const form = document.querySelector("#form");
const nameInput = document.querySelector("#name-input");
const nameError = document.querySelector("#name .error");
const emailInput = document.querySelector("#email-input");
const emailError = document.querySelector("#email .error");
const messageInput = document.querySelector("#message-input");
const messageError = document.querySelector("#message .error");
const submitBtn = document.querySelector("#submit-btn");
const charCount = document.querySelector("#char-count");
const success = document.querySelector(".success");

messageInput.addEventListener("input", () => {
  const currentLength = messageInput.value.length;
  charCount.textContent = `Character Count: ${currentLength} / 200`;
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  let valid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const currentLength = messageInput.value.length;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name";
    nameInput.classList.add("error");
    valid = false;
  } else {
    nameInput.classList.remove("error");
  }
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Invalid email";
    emailInput.classList.add("error");
    valid = false;
  } else {
    emailInput.classList.remove("error");
  }
  if (messageInput.value === "") {
    messageError.textContent = "Please type something";
    messageInput.classList.add("error");
    valid = false;
  } else {
    messageInput.classList.remove("error");
  }
  if (currentLength > 200) {
    messageError.textContent = "Message must be under 200 characters";
    messageInput.classList.add("error");
    submitBtn.disabled = true;
    charCount.style.color = "red";
    valid = false;
  } else {
    submitBtn.disabled = false;
    charCount.style.color = "inherit";
  }
  if (valid) {
    success.textContent = "Thank you for signing up!";
    success.classList.add("success");
    form.reset();
  }
});
