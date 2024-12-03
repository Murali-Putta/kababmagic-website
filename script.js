// Add interactivity if needed, for now, just a placeholder
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website is loaded and ready!");
});

// Example: Smooth scroll for navigation
const menuLink = document.querySelector('a[href="#menu"]');
menuLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});
