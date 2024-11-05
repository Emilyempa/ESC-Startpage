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
const body = document.querySelector("body");

menuButton.addEventListener("click", () => {
  //   menuIcon.classList.toggle("active");
  // event.stopPropagation();
  // const navMenu = document.querySelector(".nav-header");
  navMenu.classList.toggle("active");
  // navMenu.appendChild(closeButton); Nedanför istället så den kommer först av barnen
  navMenu.insertBefore(closeButton, navMenu.firstChild);
  closeButton.style.marginLeft = "auto";
  closeButton.style.marginTop = "-3rem";
  navMenu.style.top = "0";
  // navMenu.style.left = "0";
  // navMenu.style.right = "0";
  navMenu.style.backgroundColor = "#011827";
  navMenu.style.color = "#ffffff";
  navMenu.style.position = "fixed";
  navMenu.style.fontSize = "0.7rem";
  navMenu.style.zIndex = "1000";
  // navMenu.style.margin = "0.5rem";
  navMenu.style.height = "96%";
  navMenu.style.width = "90%";
  // navMenu.style.height = "100%";
  // navMenu.style.width = "100%";
  // navMenu.style.border = "5rem"
  navMenu.style.border = "20px solid rgba(255, 255, 255, 0.9)";
  navMenu.style.display = "flex";
  navMenu.style.flexDirection = "column";
  // navMenu.style.justifyContent = "center"; blir barnen för nära varandra
  navMenu.style.justifyContent = "space-evenly";
  navMenu.style.alignItems = "center";
  // navMenu.child.style.padding = "3rem";
  // if(navMenu.classList.contains("active")){
  //   body.style.opacity = "0.5";
  //   navMenu.style.opacity = "1";
  
  // } else{
  //   body.style.opacity = "1";
  // }
 
});



closeButton.addEventListener("click", () => {
  navMenu.style.display = "none";
  navMenu.classList.remove("active");
  // body.style.opacity = "1";
});

// if(navMenu.classList.contains("active")){
//   body.style.opacity = "0.5";
//   navMenu.style.opacity = "1";

// }
