const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
const HiDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginsubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HiDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username); 
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HiDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
    loginForm.classList.remove(HiDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginsubmit);
} else {
    paintGreetings(username);
}
