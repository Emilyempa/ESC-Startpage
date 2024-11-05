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
header.appendChild(menuButton);
// header.appendChild(closeButton);



menuButton.addEventListener("click", () => {
//   menuIcon.classList.toggle("active");
//   closeIcon.classList.toggle("active");
  const navMenu = document.querySelector(".nav-header");
  navMenu.classList.toggle("active");
  navMenu.appendChild(closeButton);
  navMenu.style.backgroundColor = "#011827";
  navMenu.style.color = "#ffffff"
  navMenu.style.position = "fixed";


//   lägg till top left och width och height ev nav.style.zIndex = "1000"
});


