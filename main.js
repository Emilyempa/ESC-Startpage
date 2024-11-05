const menuButton = document.createElement("button");
menuButton.className = "menu-button";
menuButton.ariaLabel = "open menu";
menuButton.type = "button";

const closeButton = document.createElement("button");
closeButton.className = "close-button";
closeButton.ariaLabel = "close menu";
closeButton.type = "button";

const menuIcon = document.createElement("img");
menuIcon.src = "./pics/menu.png";
menuIcon.alt = "open menu button";
menuIcon.className = "menu-icon";

const closeIcon = document.createElement("img");
closeIcon.src = "./pics/x.png";
closeIcon.alt = "close menu button";
closeIcon.className = "close-icon";

menuIcon.style.width = "51px";
menuIcon.style.height = "26px";

closeIcon.style.width = "37px";
closeIcon.style.height = "40px";

menuButton.style.backgroundColor = "transparent";
menuButton.style.border = "none";

closeButton.style.backgroundColor = "transparent";
closeButton.style.border = "none";

menuButton.appendChild(menuIcon);
closeButton.appendChild(closeIcon);

const header = document.querySelector(".header");
const mediaQuery = window.matchMedia("(max-width: 1280px)");

function myMediaQuery(event) {
  if(event.matches) {
  header.appendChild(menuButton);
  }
  else {
    if(header.contains(menuButton));
    header.removeChild(menuButton);
  }
};

myMediaQuery(mediaQuery);

mediaQuery.addEventListener("change", myMediaQuery)

const navMenu = document.querySelector(".nav-header");

// if (header && navMenu) {
//   header.parentNode.insertBefore(navMenu, header);
// }


menuButton.addEventListener("click", () => {
//   menuIcon.classList.toggle("active");
//   closeIcon.classList.toggle("active");
  const navMenu = document.querySelector(".nav-header");
  // navMenu.classList.toggle("active");
  navMenu.appendChild(closeButton);
  navMenu.style.backgroundColor = "#011827";
  navMenu.style.color = "#ffffff";
  navMenu.style.position = "absolut"; 
  navMenu.style.fontSize = "0.7rem";
  // navMenu.style.padding = "4rem";
  navMenu.style.zIndex = "1000";
  navMenu.style.height = "100%";
  navMenu.style.width = "100%";
  navMenu.style.display = "flex";
  navMenu.style.flexDirection = "column";
  // navMenu.style.justifyContent = "center";
  navMenu.style.alignItems = "center";
  
});

closeButton.addEventListener("click", () => {
  navMenu.style.display = "none"
})
