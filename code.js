document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple client-side validation (replace with real authentication in production)
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("loggedInUser", username);
        // Redirect to the main page after successful login
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password.");
    }
});

document.getElementById("createAccountForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // Store the new account details (this is not secure; for demonstration purposes only)
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);
    alert("Account created successfully. Please log in.");
    // Redirect to the main page after account creation
    window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", function() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        var nav = document.querySelector("nav ul");
        var accountItem = document.createElement("li");
        accountItem.textContent = "Logged in as " + loggedInUser;
        nav.appendChild(accountItem);
    } else if (window.location.pathname !== "/login.html" && window.location.pathname !== "/create-account.html") {
        window.location.href = "login.html";
    }
});
