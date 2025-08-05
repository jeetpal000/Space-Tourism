// Get current page filename
const currentPage = window.location.pathname.split("/").pop();
// Select all nav links
const navLinks = document.querySelectorAll(".link a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    console.log(linkPage);
    
    if (linkPage === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});


const navBar = document.querySelector(".link");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");



hamburger.addEventListener("click", () => {
  navBar.classList.add("show");
  hamburger.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  navBar.classList.remove("show");
  hamburger.style.display = "block";
  closeIcon.style.display = "none";
});
