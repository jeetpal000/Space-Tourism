const allLinks = document.querySelectorAll(".crew-link");
fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.crew[0]);

    const title = document.querySelector(".title");
    const name = document.querySelector(".name");
    const details = document.querySelector(".details");
    const image = document.querySelector(".crew-image img");

    const defaultCrew = data.crew.find(
      (det) => det.name.toLowerCase() === "douglas hurley"
    );
    if (defaultCrew) {
      title.innerText = defaultCrew.role;
      name.innerText = defaultCrew.name;
      details.innerText = defaultCrew.bio;
      image.src = defaultCrew.images.png;
    }

    allLinks.forEach((crew) => {
      crew.addEventListener("click", () => {
        allLinks.forEach((del) => del.classList.remove("active"));
        crew.classList.add("active");
        const crewName = crew.dataset.crew;
        // console.log(crewDetails);
        const crewDetails = data.crew.find(
          (det) => det.name.toLowerCase() === crewName
        );
        if (crewDetails) {
          title.innerText = crewDetails.role;
          name.innerText = crewDetails.name;
          details.innerText = crewDetails.bio;
          image.src = crewDetails.images.png;
        }
      });
    });
  });
const currentPage = window.location.pathname.split("/").pop();

// Select all nav links
const navLinks = document.querySelectorAll(".link a");

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const defaultactive = document.querySelector('[data-crew="douglas hurley"]');
  if (defaultactive) {
    defaultactive.classList.add("active");
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