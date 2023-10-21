document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });

function copyAddress() {
    let text = "6960 Sylvania Petersburg Rd, Ottawa Lake, MI 49267";
    navigator.clipboard.writeText(text);
    document.getElementById("myTooltip").textContent = "Copied!";
    }
function copyPhone() {
    let text = "734-637-4475";
    navigator.clipboard.writeText(text);
    document.getElementById("myTooltip").textContent = "Copied!";
}
function outFunc() {
    document.getElementById("myTooltip").textContent = "Copy to clipboard";
}