// Show more or less button
const button = document.querySelectorAll(".card .button");
button.forEach(btn => {
  const getPar = btn.parentElement,
    praf = getPar.querySelector(".card .parag"),
    allText = praf.innerHTML;
  praf.innerHTML = allText.substr(0, 300) + "...";

  btn.addEventListener("click", e => {
    if (getPar.classList.contains("show")) {
      getPar.classList.remove("show");
      praf.innerHTML = allText.substr(0, 300) + "...";
      getPar.querySelector(".button").innerHTML = "Show More";
    } else {
      getPar.classList.add("show");
      praf.innerHTML = allText;
      getPar.querySelector(".button").innerHTML = "Show Less";
    }
  });
});

// Window scroll
window.onscroll = () => {
  getScroll();
  parallax();
};
// Nav color on scroll
const nav = document.querySelector("header nav"),
  navClr = document.querySelectorAll("header nav ul li a"),
  logo = document.querySelector("header nav .icon"),
  navBtn = document.querySelector("header nav .nav-btn ");
function getScroll() {
  if (document.documentElement.scrollTop > 630) {
    nav.classList.add("nav-down");
    logo.classList.add("li-down");
    navBtn.classList.add("li-down");
    navClr.forEach(nc => {
      nc.classList.add("li-down");
    });
  } else {
    nav.classList.remove("nav-down");
    logo.classList.remove("li-down");
    navBtn.classList.remove("li-down");
    navClr.forEach(nc => {
      nc.classList.remove("li-down");
    });
  }
}
const static = document.querySelector(".landing-page .landing-static");
function parallax() {
  let pos = document.documentElement.scrollTop;
  static.style.transform = `translateY(${pos / 3}px)`;
}

// img-click
const imgShow = document.querySelector(".img-show"),
  imgCard = document.querySelectorAll(".card img");
imgCard.forEach(ic => {
  ic.addEventListener("click", () => {
    if (ic.parentElement.tagName != "A") {
      let imgFrmCard = ic.src;
      imgShow.querySelector("img").src = imgFrmCard;
      imgShow.style.opacity = "1";
      imgShow.style.zIndex = "10";
    }
  });
});
imgShow.addEventListener("click", () => {
  imgShow.style.opacity = "0";
  imgShow.style.zIndex = "-10";
});

// footer year
const time = new Date(),
  year = document.querySelector("footer p .year");
year.innerHTML = time.getFullYear();

// Nav responsive
const header = document.querySelector("header");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("nav-btn-color");
  nav.classList.toggle("nav-res");
  header.classList.toggle("header-focus");
});
