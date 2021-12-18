var HTML_cookie_count = document.getElementById("cookieCount");

var cookieCount = 0;

function cookieClick() {
    // Increase cookie count
    cookieCount++;
    console.log("Cookie Count: " + cookieCount);

    // Display cookie count
    HTML_cookie_count.innerText = "Cookie Count: " + cookieCount
}