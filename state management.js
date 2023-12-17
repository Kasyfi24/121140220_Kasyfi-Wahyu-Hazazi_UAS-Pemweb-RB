// JavaScript functions for cookie and local storage handling
function setCookie(name, value, days) {
    // Implement logic to set a cookie
}

function getCookie(name) {
    // Implement logic to get a cookie
}

function deleteCookie(name) {
    // Implement logic to delete a cookie
}

// Example usage
setCookie("user_name", "John Doe", 30);
let userName = getCookie("user_name");
deleteCookie("user_name");

// Local Storage
localStorage.setItem("user_email", "john.doe@example.com");
let userEmail = localStorage.getItem("user_email");
localStorage.removeItem("user_email");
