const technologyLink = document.querySelectorAll(".technology-link");
fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    const name = document.querySelector(".technology-name");
    const description = document.querySelector(".technology-details-text");
    const image = document.querySelector(".technology-image img");

      const technologyDetails = data.technology.find(
          (det) => det.name.toLowerCase() === 'launch vehicle'
        );
        if (technologyDetails) {
          name.innerText = technologyDetails.name;
          description.innerText = technologyDetails.description;
          image.src = technologyDetails.images.portrait;
        }

    technologyLink.forEach((technologyData) => {
      technologyData.addEventListener("click", () => {
        technologyLink.forEach((del)=>del.classList.remove("active"))
        technologyData.classList.add("active")
        const technologyName = technologyData.dataset.technology.toLowerCase();
        const technologyDetails = data.technology.find(
          (det) => det.name.toLowerCase() === technologyName
        );
        if (technologyDetails) {
          name.innerText = technologyDetails.name;
          description.innerText = technologyDetails.description;
          image.src = technologyDetails.images.portrait;
        }
      });
    });
  });
const currentPage = window.location.pathname.split("/").pop();

// Select all nav links
const navLinks = document.querySelectorAll(".link a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});


document.addEventListener("DOMContentLoaded", ()=>{
  const defaultActive = document.querySelector('[data-technology="Launch vehicle"]');
  if(defaultActive){
    defaultActive.classList.add("active")
  }
})

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