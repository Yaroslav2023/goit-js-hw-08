import throttle from 'lodash.throttle';

const inputForm = document.querySelector(".feedback-form");
const inputEmailEl = document.querySelector(".feedback-form input");
const textAreaForm = document.querySelector(".feedback-form textarea");

inputForm.addEventListener('input', throttle(onFormInput, 500));
inputForm.addEventListener('submit', onFormSubmit);

const messageSubmit = {
    email: "",
    message: ""
};

savedText();

function onFormInput(event) {
  if(event.target.nodeName === "INPUT") {
    messageSubmit.email = event.target.value;
    messageSubmit.message = textAreaForm.value;
  } else { 
    messageSubmit.message = event.target.value;
    messageSubmit.email = inputEmailEl.value;
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(messageSubmit));
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(messageSubmit);
};

function savedText(event) {
    const savedForm = localStorage.getItem("feedback-form-state");
    
    if(savedForm) {
            textAreaForm.value = JSON.parse(savedForm).message;
            inputEmailEl.value = JSON.parse(savedForm).email;
        }

    };
