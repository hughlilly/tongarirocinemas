/* 
// Makes the mobile menu work
// 
// If js is not enabled, mobile users will
// not be able to use the menu
// 
// Based on https://github.com/bradtraversy/tailwind-landing-page/blob/main/css/main.css
// 
*/

// Get buttons to manipulate
const hamButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");

hamButton.addEventListener("click", () => {
  // Turn hamburger menu button into 'close' cross after tap, and vice-versa
  hamButton.classList.toggle("open");
  // Toggle visibility of menu after tap (and vice-versa)
  mobileMenu.classList.toggle("flex");
  mobileMenu.classList.toggle("hidden");
});
