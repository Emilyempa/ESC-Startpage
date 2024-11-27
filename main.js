highestRanking()

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

closeIcon.style.width = "35px";
closeIcon.style.height = "35px";

menuButton.style.backgroundColor = "transparent";
menuButton.style.border = "none";
menuButton.style.alignSelf = "flex-start";
menuButton.style.paddingLeft = "2rem";
menuButton.style.paddingTop = "0.3rem";
menuButton.style.flexGrow = "1";
menuButton.style.display = "flex";
menuButton.style.justifyContent = "flex-end";

closeButton.style.backgroundColor = "transparent";
closeButton.style.border = "none";

menuButton.appendChild(menuIcon);
closeButton.appendChild(closeIcon);

const header = document.querySelector(".header");

header.style.padding = "0.5rem";

const mediaQuery = window.matchMedia("(max-width: 700px)");

function myMediaQuery(event) {
  if (event.matches) {
    header.appendChild(menuButton);
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
  closeButton.style.padding = "0.5rem 0.5rem 3rem 0.5rem";
  navMenu.style.fontSize = "0.8rem";
});

closeButton.addEventListener("click", () => {
  navMenu.style.display = "none";
  navMenu.classList.remove("active");
});

async function highestRanking() {
  try{
      const response = await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");
      const data = await response.json();
      data.challenges.sort(function(a, b){return b.rating - a.rating});
      const topThree =data.challenges.slice(0, 3);
      console.log(topThree);
      const cards = document.querySelectorAll(".article-card");
      topThree.forEach((challenge, index) => {
        if (cards[index]) {
          const card = cards[index];
          card.querySelector(".article-card-img").src = challenge.image;
          card.querySelector(".article-card-title").textContent = challenge.title;
          card.querySelector(".article-online-onsite").textContent = "";
          card.querySelector(".article-card-p2").textContent = challenge.description;  
          card.querySelector(".article-card-p1").textContent = `${challenge.minParticipants}-${challenge.maxParticipants} participants`;
            if (challenge.type.includes("onsite")) {
              card.querySelector(".article-online-onsite").textContent = `(${challenge.type})`;
              card.querySelector(".online-onsite-icon").src = "./pics/home.png";
              card.querySelector(".article-card-a").textContent = "Book this room";
            }
        }
      });
  }catch (error){
      console.error("error", error);
      }
      
  };
  
        
  

  
   