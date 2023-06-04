import throttle from 'lodash.throttle';

const inputForm = document.querySelector(".feedback-form");
const inputEmailEl = document.querySelector(".feedback-form input");
const textAreaForm = document.querySelector(".feedback-form textarea");

inputForm.addEventListener('submit', onFormSubmit);
inputEmailEl.addEventListener('input', throttle(onEmailInput, 500));
textAreaForm.addEventListener('input', throttle(onTextAreaInput, 500));

const messageSubmit = {
    email: "",
    message: ""
};

savedText();
function onEmailInput (event) {
    messageSubmit.email = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(messageSubmit));
}

function onFormSubmit (event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    localStorage.removeItem("feedback-form-state");
;
};

function onTextAreaInput (event) {
    messageSubmit.message = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(messageSubmit));
};

function savedText(event) {
    const savedForm = localStorage.getItem("feedback-form-state");

    if(savedForm) {
        textAreaForm.value = JSON.parse(savedForm).message;
        inputEmailEl.value = JSON.parse(savedForm).email;
    }
}



