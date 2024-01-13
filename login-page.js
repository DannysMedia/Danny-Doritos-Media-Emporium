const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev" ) {
        alert("You have successfully logged in.");
        location.href = "home.html", "_self";
    } else if (username === "test" && password === "test" ) {
        alert("You have successfully logged in.");
        location.href = "home.html", "_self";
    } else if (username === "RWhiting" && password === "HPR7GK5dnu" ) {
        alert("You have successfully logged in.");
        location.href = "home.html", "_self";
    }  else if (username === "NRussell" && password === "Russell2004" ) {
            alert("You have successfully logged in.");
            location.href = "home.html", "_self"; 
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    
})