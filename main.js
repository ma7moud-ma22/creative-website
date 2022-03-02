let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let good_morning = document.getElementById("good_morning");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountains7");
let images = document.querySelector(".images");

window.onscroll = function () {
  stars.style.left = scrollY * 3 + "px";
  if (scrollY >= 300) {
    moon.style.display = "none";
    good_morning.style.display = "none";
    mountains3.style.display = "none";
    mountains4.style.display = "none";
  } else {
    mountains4.style.display = "block";
    mountains4.style.top = `${scrollY * 1.1}px`;
    good_morning.style.display = "block";
    moon.style.display = "block";
    moon.style.transform = "translateY(" + scrollY * 2.5 + "px)";
    good_morning.style.transform = `translate(-50%,${scrollY}px)`;
    mountains3.style.top = scrollY * 1.5 + "px";
    mountains3.style.display = "block";

    if (scrollY >= 220) {
      good_morning.style.fontSize = "68px";
    } else {
      good_morning.style.fontSize = scrollY / 3.2 + "px";
    }
  }

  if (scrollY >= 165) {
    images.style.background = `linear-gradient( #59d3f8, #341358)`;
      document.querySelector("header").style.backgroundColor = "#48135867";

  } else {
          document.querySelector("header").style.backgroundColor = "transparent";

    images.style.background = `linear-gradient( #270a23, #341358)`;
  }
  boat.style.left = scrollY * 1.6 + "px";
  boat.style.top = scrollY / 3 + "px";
  river.style.top = scrollY / 3 + "px";
  if (scrollY >= 30) {
    
    document.querySelector(".images h4").style.opacity = "0";
  } else {
    
    document.querySelector(".images h4").style.opacity = "1";
  }
};
