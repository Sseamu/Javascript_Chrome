const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
const HiDDEN_CLASSNAME = "hidden";

function onLoginsubmit(event) {
    event.preventDefault();
    loginForm.classList.add("HiDDEN_CLASSNAME");
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("HiDDEN_CLASSNAME");
}

loginForm.addEventListener("submit", onLoginsubmit);

