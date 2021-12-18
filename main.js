var HTML_cookie_count = document.getElementById("cookieCount");
var HTML_total_cps = document.getElementById("cookiesPerSecond");
var HTML_shop_menu = document.getElementById("shopMenu");

var HTML_cursor_cps = document.getElementById("itemCursorCPS");
var HTML_cursor_amount = document.getElementById("itemCursorAmount");
var HTML_buy_cursor_btn = document.getElementById("buyCursorBtn");

var cookieCount = 0;
var showShop = false;

const cursorCPS = 1;
var cursorAmount = 0;
var cursorPrice = 100;

function cookieClick() {
    // Increase cookie count
    cookieCount++;

    // Display cookie count
    HTML_cookie_count.innerText = "Cookie Count: " + cookieCount;

    // Display shopmenu when Cookie reach 100
    if(!showShop && cookieCount >= 100) {
        // Remove .hidden class from shopMenu
        HTML_shop_menu.className = "";
        // Update showShop status
        showShop = true;

        // Initialize HTML elements for Cursor
        HTML_cursor_cps.innerText = "(" + cursorCPS + " cps)";
        HTML_buy_cursor_btn.innerText = "Buy (- " + cursorPrice + "C)";
    }
}

function buyCursor() {
    if(cookieCount >= cursorPrice) {
    // Update JavaScript Variables
        cookieCount -= cursorPrice;
        cursorAmount++;

    // Update HTML
        // Display cookie count
        HTML_cookie_count.innerText = "Cookie Count: " + cookieCount;
        // Update Cursor Amount
        HTML_cursor_amount.innerText = "Owned: " + cursorAmount;
        // Update cps
        HTML_total_cps.innerText = "Cookies per Second: " + getCPS();

    }
}

// Calculates and Returns the total amount of cookies per second
function getCPS() {
    return (
        cursorCPS*cursorAmount
    );
}

// Add Cookies per Seconds to Cookie total every 1000ms
setInterval(() => {
    // Update Cookies count
    cookieCount += getCPS();
    // Update Cookie count HTML
    HTML_cookie_count.innerText = "Cookie Count: " + cookieCount;    
}, 1000);