// ********************** AUDIO FILE *************************
// ********************** AUDIO FILE *************************
// ********************** AUDIO FILE *************************

// var audio = new Audio('static/audio.mp3');
const audio = document.querySelector("#player");
const audioBtn = document.querySelector(".audio");
// document.addEventListener('click', ()=> audio.play())
function toggleAudio() {
  if (audio.paused) {
    audio.play();
    audioBtn.src = "static/Sound.png";
  } else {
    audio.pause();
    audioBtn.src = "static/mute.png";
  }
}
audioBtn.addEventListener("click", toggleAudio);

// ********************** CAROUSEL *************************
// ********************** CAROUSEL *************************
// ********************** CAROUSEL *************************

const mediaScroller = document.querySelector(".media-scroller");
const pageNum = document.querySelector("#page_number");
if (window.innerWidth <= 340) mediaScroller.scrollLeft = 853.4;
else if (window.innerWidth <= 370) mediaScroller.scrollLeft = 950.4;
else if (window.innerWidth <= 550) mediaScroller.scrollLeft = 1042;
function handleCarouselScroll() {
  console.log(mediaScroller.scrollLeft);
  var scrollPercentage =
    (mediaScroller.scrollLeft /
      (mediaScroller.scrollWidth - mediaScroller.clientWidth)) *
    100;
  var mediaElements = document.querySelectorAll(".media-element");
  pageNum.innerText = `${Math.floor(scrollPercentage / 16) + 1}/${
    mediaElements.length - 2
  }`;
  mediaElements.forEach(function (element, index) {
    // Calculate the distance from the center of the scroller
    var distanceFromCenter = Math.abs(
      index * element.offsetWidth -
        mediaScroller.scrollLeft +
        mediaScroller.clientWidth / 2
    );
    console.log(
      `INDEX: ${index} = ${Math.floor(Math.floor(distanceFromCenter) - 986)}`
    );
    const curDistance = Math.floor(Math.floor(distanceFromCenter) - 986);
    // 0 to -82 is the element in center
    // Calculate the scale based on the distance from the center
    var scale = 0.9;
    if (window.innerWidth >= 400) {
      scale = curDistance <= 240 && curDistance >= -82 ? 1 : 0.9;
    } else if (window.innerWidth >= 300) {
      // -173 -441
      scale = curDistance <= -173 && curDistance >= -441 ? 1 : 0.9;
    } else {
      scale = curDistance <= 0 && curDistance >= -282 ? 1 : 0.9;
    }

    // Apply the scale transformation
    element.style.transform = `scale(${scale})`;
  });
  console.log(scrollPercentage);
}
mediaScroller.addEventListener("scroll", handleCarouselScroll);

const nextBtn = document.querySelector("#right");
const prevBtn = document.querySelector("#left");
const buttons = [nextBtn, prevBtn];
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index == 0) mediaScroller.scrollTo(mediaScroller.scrollLeft + 400, 0);
    else mediaScroller.scrollTo(mediaScroller.scrollLeft - 400, 0);
  });
});

// ********************** MENU BUTTON MANIPULATION *************************
// ********************** MENU BUTTON MANIPULATION *************************
// ********************** MENU BUTTON MANIPULATION *************************

const menuBtn = document.querySelector("#menu_btn");
function toggleMenuBtn() {
  menuBtn.classList.toggle("active");
  if (menuBtn.classList.contains("active")) {
    document.querySelector("#open").style.display = "none";
    document.querySelector("#close").style.display = "block";
  } else {
    document.querySelector("#open").style.display = "block";
    document.querySelector("#close").style.display = "none";
  }
}
menuBtn.addEventListener("click", toggleMenuBtn);

// ********************** MOBILE NAV LINKS MANIPULATION *************************
// ********************** MOBILE NAV LINKS MANIPULATION *************************
// ********************** MOBILE NAV LINKS MANIPULATION *************************

const links = document.querySelectorAll(".mob_menu_items > *");
links.forEach((link) => {
  link.addEventListener("click", toggleMenuBtn);
});

// ********************** NAV LINKS MANIPULATION *************************
// ********************** NAV LINKS MANIPULATION *************************
// ********************** NAV LINKS MANIPULATION *************************

// ! VERTICAL SCROLL
// function handleScroll() {
//   const scrollTop =
//     window.pageYOffset ||
//     (document.documentElement || document.body.parentNode || document.body)
//       .scrollTop;
//   console.log(scrollTop);
//   let links;
//   if (window.innerWidth > 850)
//     links = document.querySelectorAll(".menu_items > *");
//   else links = document.querySelectorAll(".mob_menu_items > *");
//   console.log(links);
//   const home = links[0];
//   const ourstory = links[1];
//   const tokenomics = links[2];
//   const knockles = links[3];
//   const follow = links[4];
//   const bgGradient = document.querySelector(".bg_gradient")
//   if (scrollTop < 475) home.classList.add("active");
//   else home.classList.remove("active");
//   if (scrollTop >= 475 && scrollTop < 1200) {
//     ourstory.classList.add("active");
//     bgGradient.style.display = "none"
//   }
//   else {
//     ourstory.classList.remove("active");
//     if(window.innerWidth>=600)
//       bgGradient.style.display = "block"
//   }
//   if (scrollTop >= 1200 && scrollTop < 1975) tokenomics.classList.add("active");
//   else tokenomics.classList.remove("active");
//   if (scrollTop > 1975 && scrollTop < 2975) knockles.classList.add("active");
//   else knockles.classList.remove("active");
//   if (scrollTop >= 2975) follow.classList.add("active");
//   else follow.classList.remove("active");
// }

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  getDirection: true,
  mobile: {
    breakpoint: 0,
    smooth: true,
    getDirection: true,
  },
  tablet: {
    breakpoint: 0,
    smooth: true,
    getDirection: true,
  },
});

const menu_links = document.querySelectorAll(".menu_items > *");

const home = menu_links[0];
const ourstory = menu_links[1];
const tokenomics = menu_links[2];
const knockles = menu_links[3];
const follow = menu_links[4];

let maxScrollTop = 0;
if (window.innerWidth >= 1500) {
  maxScrollTop = Math.max(
    document.body.scrollHeight - window.innerHeight - 2500,
    // document.documentElement.scrollHeight - window.innerHeight
    0
  );
}
if (window.innerWidth >= 1700) {
  maxScrollTop = Math.max(
    document.body.scrollHeight - window.innerHeight - 2700,
    // document.documentElement.scrollHeight - window.innerHeight
    0
  );
}
if (window.innerWidth<=1500) {
  maxScrollTop = Math.max(
    document.body.scrollHeight - window.innerHeight - window.innerWidth - 2000,
    // document.documentElement.scrollHeight - window.innerHeight
    0
  );
  console.log(maxScrollTop)
}
if (window.innerWidth<=1300) {
  maxScrollTop = Math.max(
    document.body.scrollHeight - window.innerHeight - window.innerWidth - 1700,
    // document.documentElement.scrollHeight - window.innerHeight
    0
  );
  console.log(maxScrollTop)
}
console.log(maxScrollTop);

function navigate(e, index) {
  e.preventDefault();
  // let target = Math.floor(-6887/4);
  let target = -1 * Math.floor(maxScrollTop / 4);
  // 0, 1288, 2589, 3897, 4600
  if (window.innerWidth <= 1500) {
    if (index === 0) target = 0;
    if (index === 1) target *= 1;
    if (index === 2) target *= 1.96;
    if (index === 3) target *= 2.87;
    if (index === 4) target *= 3.96;
  } else {
    if (index === 0) target = 0;
    if (index === 1) target *= 1;
    if (index === 2) target *= 1.96;
    if (index === 3) target *= 2.96;
    if (index === 4) target *= 3.96;
  }
  console.log(target);
  gsap.to(wrapper, {
    x: target,
    // x: 6880/4,
    y: 0,
    duration: 0.001,
    ease: "power2.out",
  });
  scroll.scrollTo(-1 * target);
  // scroll.scrollTo(-1 * 6880/4);
}
menu_links.forEach((link, index) => {
  link.addEventListener("click", (e) => navigate(e, index));
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
const footer = document.querySelector(".footer");
// Listen for the scroll event
function handleScroll(scroll) {
  // Get the current scroll position
  const scrollTop = scroll.y;

  if (Math.abs(lastScrollTop - scrollTop) <= 1) {
    document.querySelector(".navbar").style.opacity = "1";
    document.querySelector(".footer").style.opacity = "1";
    return;
  }
  // Calculate the scroll direction
  const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";

  // Update the translation based on scroll direction
  gsap.to(wrapper, {
    x: scrollDirection === "down" ? -scrollTop : -scrollTop + 1,
    y: scrollTop,
    duration: 0.001,
    ease: "power2.out",
  });
  gsap.to(navbar, {
    y: scrollTop,
    duration: 0,
    ease: "power2.out",
  });
  gsap.to(footer, {
    y: scrollTop,
    duration: 0,
    ease: "power2.out",
  });

  // Update NAVBAR
  if (window.innerWidth <= 1400) {
    // 0 - 675              -> Home
    if (scrollTop < 675) home.classList.add("active");
    else home.classList.remove("active");
    // 675 -  1288 -  1933  -> outstory
    if (scrollTop >= 675 && scrollTop < 1933) ourstory.classList.add("active");
    else ourstory.classList.remove("active");
    // 1933 -  2589 -  3385 -> tokenomics
    if (scrollTop >= 1933 && scrollTop < 3385)
      tokenomics.classList.add("active");
    else tokenomics.classList.remove("active");
    // 3385 -  3897 -  4600 -> knocklemaps
    if (scrollTop >= 3385 && scrollTop < 4600) knockles.classList.add("active");
    else knockles.classList.remove("active");
    // 4600 -  end          -> follow
    if (scrollTop > 4600) follow.classList.add("active");
    else follow.classList.remove("active");
  } else {
    if (scrollTop < 800) home.classList.add("active");
    else home.classList.remove("active");
    // 675 -  1288 -  1933  -> outstory
    if (scrollTop >= 800 && scrollTop < 2500) ourstory.classList.add("active");
    else ourstory.classList.remove("active");
    // 1933 -  2589 -  3385 -> tokenomics
    if (scrollTop >= 2500 && scrollTop < 4300)
      tokenomics.classList.add("active");
    else tokenomics.classList.remove("active");
    // 3385 -  3897 -  4600 -> knocklemaps
    if (scrollTop >= 4400 && scrollTop < 6800) knockles.classList.add("active");
    else knockles.classList.remove("active");
    // 4600 -  end          -> follow
    if (scrollTop > 6800) follow.classList.add("active");
    else follow.classList.remove("active");
  }
  if (window.innerWidth <= 1050) {
    if (scrollTop >= 3385 && scrollTop < 4100) knockles.classList.add("active");
    else knockles.classList.remove("active");
    // 4600 -  end          -> follow
    if (scrollTop > 4100) follow.classList.add("active");
    else follow.classList.remove("active");
  }
  console.log(scrollTop);

  lastScrollTop = scrollTop;
}
function handleMobileScroll(scroll) {
  const scrollTop = scroll.y;
  gsap.to(navbar, {
    y: scrollTop,
    duration: 0,
    ease: "power2.out",
  });
  gsap.to(footer, {
    y: scrollTop,
    duration: 0,
    ease: "power2.out",
  });
}
if (window.innerWidth >= 550) {
  scroll.on("scroll", (scrollArgs) => {
    const { scroll } = scrollArgs;
    handleScroll(scroll);
  });
} else {
  scroll.on("scroll", (scrollArgs) => {
    const { scroll } = scrollArgs;
    handleMobileScroll(scroll);
  });
}

// ********************** VIDEO CONTROLS *************************
// ********************** VIDEO CONTROLS *************************
// ********************** VIDEO CONTROLS *************************

const video = document.querySelector(".video");
const playBtn = document.querySelector(".play_btn_wrapper");
function togglePlayPause() {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
    video.style.filter = "brightness(100%)";
  } else {
    video.pause();
    playBtn.style.display = "flex";
    video.style.filter = "brightness(30%)";
  }
}
video.addEventListener("click", togglePlayPause);
playBtn.addEventListener("click", togglePlayPause);

// ********************** NAVBAR & FOOTER *************************
// ********************** NAVBAR & FOOTER *************************
// ********************** NAVBAR & FOOTER *************************
setInterval(() => {
  if (scroll.scroll.isScrolling) {
    document.querySelector(".navbar").style.opacity = "0";
    document.querySelector(".footer").style.opacity = "0";
  } else {
    document.querySelector(".navbar").style.opacity = "1";
    document.querySelector(".footer").style.opacity = "1";
  }
}, 100);
