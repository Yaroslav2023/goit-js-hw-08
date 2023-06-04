import throttle from 'lodash.throttle';

const inputForm = document.querySelector(".feedback-form");
const inputEmailEl = document.querySelector(".feedback-form input");
const textAreaForm = document.querySelector(".feedback-form textarea");

inputForm.addEventListener('submit', onFormSubmit);
inputEmailEl.addEventListener('input', throttle(onEmailInput, 500));
textAreaForm.addEventListener('input', throttle(onTextAreaInput, 500));

const messageSubmit = {
    email,
    message,
}

savedText();
function onEmailInput (event) {
    const inputEmail = event.target.value;
    messageSubmit.email = inputEmail;
    localStorage.setItem("feedback-form-state", messageSubmit.email);
    console.log(inputEmail);
}

function onFormSubmit (event) {
event.preventDefault();
event.currentTarget.reset();
localStorage.removeItem("feedback-form-state");
};

function onTextAreaInput (event) {
    const inputText = event.target.value;
    localStorage.setItem("feedback-form-state", inputText);
    console.log(inputText);
};

function savedText(event) {
    const savedMessage = localStorage.getItem("feedback-form-state");

    if(savedMessage) {
        textAreaForm.value = savedMessage;
    }


}



