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

menuIcon.style.width = "45px";
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
const mediaQuery = window.matchMedia("(max-width: 700px)");

function myMediaQuery(event) {
  if (event.matches) {
    header.appendChild(menuButton);
    menuButton.style.marginLeft = "auto";
    menuButton.style.marginTop = "-1rem";
    menuButton.style.paddingRight = "0.55rem";
  } else {
    menuButton.style.marginTop = "none";
    if (header.contains(menuButton));
    header.removeChild(menuButton);
  }
}

myMediaQuery(mediaQuery);

mediaQuery.addEventListener("change", myMediaQuery);

const navMenu = document.querySelector(".nav-header");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navMenu.insertBefore(closeButton, navMenu.firstChild);
  navMenu.style.top = "0";
  navMenu.style.left = "0";
  navMenu.style.right = "0";
  navMenu.style.bottom = "0";
  navMenu.style.margin = "0.4rem";
  navMenu.style.backgroundColor = "#011827";
  navMenu.style.color = "#ffffff";
  navMenu.style.position = "fixed";
  navMenu.style.fontSize = "0.7rem";
  navMenu.style.zIndex = "1000";
  navMenu.style.boxShadow = "0 0 2rem rgba(255, 255, 255, 0.8)";
  navMenu.style.display = "flex";
  navMenu.style.flexDirection = "column";
  navMenu.style.justifyContent = "flex-start";
  navMenu.style.alignItems = "center";
  navMenu.style.gap = "1.2rem";
  closeButton.style.alignSelf = "flex-end";
  closeButton.style.padding = "0.5rem 0.5rem 3.5rem 0.5rem";
  navMenu.style.fontSize = "0.9rem";
});

closeButton.addEventListener("click", () => {
  navMenu.style.display = "none";
  navMenu.classList.remove("active");
});
