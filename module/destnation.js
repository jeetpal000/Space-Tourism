// fetch('../data.json')
// .then(res=>res.json())
// .then(data=>{
//     console.log(data);
//     document.querySelector('.destination-link-mars').addEventListener('click', ()=>{
//         document.querySelector('.destination-image img').src=data.destinations[1].images.png;
//         document.querySelector('.name').innerText = data.destinations[1].name;
//         document.querySelector('.description').innerText = data.destinations[1].description;
//         document.querySelector('.avg-distance').innerText = data.destinations[1].distance;
//         document.querySelector('.travel-time').innerText =data.destinations[1].travel;
//     })
//     document.querySelector('.destination-link-moon').addEventListener('click', ()=>{
//         document.querySelector('.destination-image img').src=data.destinations[0].images.png;
//         document.querySelector('.name').innerText = data.destinations[0].name;
//         document.querySelector('.description').innerText = data.destinations[0].description;
//         document.querySelector('.avg-distance').innerText = data.destinations[0].distance;
//         document.querySelector('.travel-time').innerText =data.destinations[0].travel;
//     })
//     document.querySelector('.destination-link-europa').addEventListener('click', ()=>{
//         document.querySelector('.destination-image img').src=data.destinations[2].images.png;
//         document.querySelector('.name').innerText = data.destinations[2].name;
//         document.querySelector('.description').innerText = data.destinations[2].description;
//         document.querySelector('.avg-distance').innerText = data.destinations[2].distance;
//         document.querySelector('.travel-time').innerText =data.destinations[2].travel;
//     })
//     document.querySelector('.destination-link-titan').addEventListener('click', ()=>{
//         document.querySelector('.destination-image img').src=data.destinations[3].images.png;
//         document.querySelector('.name').innerText = data.destinations[3].name;
//         document.querySelector('.description').innerText = data.destinations[3].description;
//         document.querySelector('.avg-distance').innerText = data.destinations[3].distance;
//         document.querySelector('.travel-time').innerText =data.destinations[3].travel;
//     })

// })

// Optimized code
const destinationLinks = document.querySelectorAll(".destination-link");
fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    const image = document.querySelector(".destination-image img");
    const name = document.querySelector(".name");
    const description = document.querySelector(".description");
    const distance = document.querySelector(".avg-distance");
    const travel = document.querySelector(".travel-time");

    const defaultDestination = data.destinations.find(
      (dest) => dest.name.toLowerCase() === "moon"
    );
    if (defaultDestination) {
      image.src = defaultDestination.images.png;
      name.innerText = defaultDestination.name;
      description.innerText = defaultDestination.description;
      distance.innerText = defaultDestination.distance;
      travel.innerText = defaultDestination.travel;
    }

    destinationLinks.forEach((link) => {
      // console.log(link);

      link.addEventListener("click", () => {
        destinationLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        const destinationName = link.dataset.destination;
        console.log(destinationName);
        const destinationData = data.destinations.find((dest) => {
          return dest.name.toLowerCase() === destinationName;
        });
        console.log(destinationData);
        if (destinationData) {
          image.src = destinationData.images.png;
          name.innerText = destinationData.name;
          description.innerText = destinationData.description;
          distance.innerText = destinationData.distance;
          travel.innerText = destinationData.travel;
          console.log(true);
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

// Optional: Load default data for Moon
document.addEventListener("DOMContentLoaded", () => {
  const defaultLink = document.querySelector('[data-destination="moon"]');
  if (defaultLink) {
    defaultLink.classList.add("active");
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