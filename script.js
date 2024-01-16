// CAROUSEL

const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll(".carousel > img");
const page_num = document.querySelector("#page_number");
var currentIndex = 1;
let device_width = window.innerWidth;
images[0].style.left = "-100%";
images[0].style.opacity = "1";
images[0].style.transform = "scale(80%)";
images[2].style.opacity = "1";
images[2].style.transform = "scale(80%)";
images[2].style.left = "100%";

function updateCarousel() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.opacity = "1";
      image.style.transform = "scale(100%)";
      image.style.left = "0%";
    } else if (index === currentIndex - 1) {
      image.style.left = "-100%";
      image.style.opacity = "1";
      image.style.transform = "scale(80%)";
    } else if (index === currentIndex + 1) {
      image.style.opacity = "1";
      image.style.transform = "scale(80%)";
      image.style.left = "100%";
    } else {
      image.style.opacity = "0";
    }
    page_num.innerText = `${currentIndex}/${images.length}`;
  });
}
carousel.querySelector(".prev").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateCarousel();
});

carousel.querySelector(".next").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  updateCarousel();
});

// ********************** VIDEO CONTROLS *************************
// ********************** VIDEO CONTROLS *************************
// ********************** VIDEO CONTROLS *************************

function togglePlayPause() {
  const video = document.querySelector('.video')
  const playBtn = document.querySelector('.play_btn')
  if (video.paused) {
    video.play();
    playBtn.style.display = "none"
    video.style.filter = "brightness(100%)"
  } else {
    video.pause();
    playBtn.style.display = "block"
    video.style.filter = "brightness(30%)"
  }
}
document.querySelector('.video').addEventListener('click', togglePlayPause)
document.querySelector('.play_btn').addEventListener('click', togglePlayPause)

// ********************** MENU BUTTON MANIPULATION *************************
// ********************** MENU BUTTON MANIPULATION *************************
// ********************** MENU BUTTON MANIPULATION *************************

document.querySelector("#menu_btn").addEventListener("click", () => {
  document.querySelector("#menu_btn").classList.toggle("active");
  if (document.querySelector("#menu_btn").classList.contains("active")) {
    document.querySelector("#open").style.display = "none";
    document.querySelector("#close").style.display = "block";
  } else {
    document.querySelector("#open").style.display = "block";
    document.querySelector("#close").style.display = "none";
  }
});

// ********************** NAVBAR MANIPULATION *************************
// ********************** NAVBAR MANIPULATION *************************
// ********************** NAVBAR MANIPULATION *************************

let menu_links = [];
if (device_width <= 850 && device_width >= 300) {
  menu_links = document.querySelectorAll(".mob_menu_items > *");
} else {
  menu_links = document.querySelectorAll(".menu_items > *");
}
console.log(menu_links);
function updateMenu(scrollTop) {
  if (scrollTop > 300) {
    if (scrollTop > 2000)
      if (scrollTop > 4600)
        if (scrollTop > 9000)
          menu_links.forEach((link, index) => {
            if (index === 4) link.classList.add("active");
            else link.classList.remove("active");
          });
        else
          menu_links.forEach((link, index) => {
            if (index === 3) link.classList.add("active");
            else link.classList.remove("active");
          });
      else
        menu_links.forEach((link, index) => {
          if (index === 2) link.classList.add("active");
          else link.classList.remove("active");
        });
    else
      menu_links.forEach((link, index) => {
        if (index === 1) link.classList.add("active");
        else link.classList.remove("active");
      });
  } else {
    menu_links.forEach((link, index) => {
      if (index === 0) link.classList.add("active");
      else link.classList.remove("active");
    });
  }
}

function handleNavbar(scrollTop, lastScrollTop) {
  const navbar = document.querySelector(".navbar");
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.opacity = "0";
    navbar.style.zIndex = "-999";
  } else {
    // Scrolling up
    navbar.style.opacity = "1";
    navbar.style.zIndex = "999";
  }
}

// ********************** SCROLL ANIMATIONS *************************
// ********************** SCROLL ANIMATIONS *************************
// ********************** SCROLL ANIMATIONS *************************

const home = document.querySelector(".home");
const our_story = document.querySelector(".ourstory");
const tokenomic = document.querySelector(".tokenomics");
const knockles = document.querySelector(".knockle_maps");
const follow_section = document.querySelector(".follow"); 

let lastScrollTop = 0;

// ********************** ROUTING *************************
// ********************** ROUTING *************************
// ********************** ROUTING *************************

const home_link = menu_links[0];
var scrollTop = 0;
var homeFlag = false;
home_link.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default link behavior (e.g., navigating to another page)
  homeFlag = true;
  updateAnimations();
});
const our_story_link = menu_links[1];
var scrollTop = 0;
var storyFlag = false;
our_story_link.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default link behavior (e.g., navigating to another page)
  storyFlag = true;
  updateAnimations();
});
const tokenomics_link = menu_links[2];
var scrollTop = 0;
var tokenomicsFlag = false;
tokenomics_link.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default link behavior (e.g., navigating to another page)
  tokenomicsFlag = true;
  updateAnimations();
});
const knockle_maps_link = menu_links[3];
var scrollTop = 0;
var knockleFlag = false;
knockle_maps_link.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default link behavior (e.g., navigating to another page)
  knockleFlag = true;
  updateAnimations();
});
const follow_link = menu_links[4];
var scrollTop = 0;
var followFlag = false;
follow_link.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default link behavior (e.g., navigating to another page)
  home.style.transition = "0ms";
  followFlag = true;
  updateAnimations();
});

function updateAnimations() {
  scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  if (scrollTop > 10) {
    document.querySelector(".home .text").style.opacity = "0";
    document.querySelector(".navbar").style.opacity = "0"
    document.querySelector(".navbar").classList.add('hoverOn')
  } else {
    document.querySelector(".navbar").style.opacity = "1"
    document.querySelector(".home .text").style.opacity = "1";
  }

  // ********************** ROUTING *************************
  // ********************** ROUTING *************************
  // ********************** ROUTING *************************

  let currentScroll = window.scrollY || document.documentElement.scrollTop;
  if (storyFlag || tokenomicsFlag || homeFlag || knockleFlag || followFlag) {
    var duration = 300; // Adjust the duration as needed
    // Set the target scroll position
    var targetScroll = 0;
    if (homeFlag) {
      targetScroll = 0;
      duration = 500;
    }
    if (storyFlag) targetScroll = 350;
    if (tokenomicsFlag) {
      targetScroll = 2076;
      duration = 600;
    }
    if (knockleFlag) {
      targetScroll = 6745;
      duration = 500;
    }
    if (followFlag) {
      targetScroll = window.innerWidth <= 850 ? 9500 : 9388;
      duration = 700;
    }

    const startTime = performance.now();

    function scrollToTarget() {
      const loader = document.querySelector('.loader');
      loader.style.opacity = "1"
      loader.style.zIndex = "9999"
      const currentTime = performance.now();
      const progress = Math.min(1, (currentTime - startTime) / duration);
      
      const newScroll =
      currentScroll + (targetScroll - currentScroll) * progress;
      window.scrollTo(0, newScroll);
      
      if (progress < 1) {
        requestAnimationFrame(scrollToTarget);
      } else {
        homeFlag = false;
        storyFlag = false; // Reset the flag after scrolling is complete
        tokenomicsFlag = false;
        knockleFlag = false;
        followFlag = false;
        loader.style.opacity = "0"
        loader.style.zIndex = "-9999"
      }
    }
    
    requestAnimationFrame(scrollToTarget);
  }

  // ********************** NAVBAR STYLES *************************
  // ********************** NAVBAR STYLES *************************
  // ********************** NAVBAR STYLES *************************

  // handleNavbar(scrollTop, lastScrollTop);
  lastScrollTop = scrollTop;
  updateMenu(scrollTop);

  console.log(scrollTop);

  const scale_factor = 1;
  const translate_factor = 4;

  // ********************** MOBILE STYLES *************************
  // ********************** MOBILE STYLES *************************
  // ********************** MOBILE STYLES *************************

  const device_width = window.innerWidth;
  console.log(device_width);
  if (device_width <= 850 && device_width >= 300) {
    const cards = document.querySelectorAll(".knockle_maps img");
    cards.forEach((card, index) => {
      if (index + 1 < 5) card.src = `static/card-${index + 1}.png`;
    });

    const translate_factor = 5;
    if (scrollTop < 500) {
      our_story.style.opacity = "0";
      home.style.opacity = "1";
      home.style.transform = `translateY(${
        scrollTop * translate_factor
      }px) scale(${scrollTop > 100 ? scrollTop * scale_factor : "100"}%)`;
    } else {
      home.style.opacity = "0";
    }

    our_story.style.opacity = "1";
    our_story.style.transform = `translateY(${
      scrollTop * 2.4
    }px) scale(${scrollTop > 100 ? scrollTop * 1.5 : "100"}%)`;

    // OUR STORY
    if (scrollTop < 250) {
      our_story.style.opacity = "0";
    }

    // OUR STORY
    if (scrollTop > 1750) {
      our_story.style.opacity = "0";
      tokenomic.style.opacity = "1";
      tokenomic.style.transform = `translateX(-${
        scrollTop * 0.05
      }px) translateY(${scrollTop * 1}px) scale(${
        scrollTop > 100 ? scrollTop * 1.2 : "100"
      }%)`;
    } else {
      tokenomic.style.opacity = "0";
    }

    // KNOCKLE MAPS
    if (scrollTop > 4000) {
      tokenomic.style.opacity = "0";
      tokenomic.style.userSelect = "none";
      knockles.style.opacity = "1";
      document.querySelector(
        ".knockle_maps"
      ).style.transform = `translateY(${scrollTop}px) scale(${
        scrollTop > 100 ? "5010" : "100"
      }%)`;
      const cards = document.querySelectorAll(".knockle_maps > img");
      cards.forEach((card, index) => {
        card.style.transform = `translateX(${scrollTop * -0.007}px)`;
      });
    } else {
      knockles.style.opacity = "0";
    }
    // FOLLOW
    if (scrollTop > 9200) {
      if (scrollTop > 9250)
        document.getElementById("follow_1").style.opacity = "1";
      else document.getElementById("follow_1").style.opacity = "0";
      if (scrollTop > 9280)
        document.querySelector(".follow_img_1").style.transform = "scale(60%)";
      else
        document.querySelector(".follow_img_1").style.transform = "scale(0%)";
      if (scrollTop > 9310)
        document.getElementById("follow_2").style.opacity = "1";
      else document.getElementById("follow_2").style.opacity = "0";
      if (scrollTop > 9340)
        document.querySelector(".follow_img_2").style.transform = "scale(60%)";
      else
        document.querySelector(".follow_img_2").style.transform = "scale(0%)";
      if (scrollTop > 9370)
        document.getElementById("follow_3").style.opacity = "1";
      else document.getElementById("follow_3").style.opacity = "0";
      if (scrollTop > 9400)
        document.querySelector(".follow_img_3").style.transform = "scale(60%)";
      else
        document.querySelector(".follow_img_3").style.transform = "scale(0%)";
      if (scrollTop > 9430)
        document.getElementById("follow_4").style.opacity = "1";
      else document.getElementById("follow_4").style.opacity = "0";
      if (scrollTop > 9470)
        document.querySelector(".follow_img_4").style.transform = "scale(60%)";
      else
        document.querySelector(".follow_img_4").style.transform = "scale(0%)";

      knockles.style.opacity = "0";
      follow_section.style.opacity = "1";
      document.querySelector(
        ".follow"
      ).style.transform = `translateY(${10000}px) scale(${
        scrollTop > 100 ? "5010" : "100"
      }%)`;
      if (scrollTop >= 10000) {
        document.querySelector(
          ".follow"
        ).style.transform = `translateY(${scrollTop}px) scale(${
          scrollTop > 100 ? "5010" : "100"
        }%)`;
        follow_section.style.transition = "0ms"
        window.scrollTo(0, 10001)
      }
    } else {
      follow_section.style.opacity = "0";
    }
  }

  // ****************************************** DESKTOP STYLES ******************************************
  // ****************************************** DESKTOP STYLES ******************************************
  // ****************************************** DESKTOP STYLES ******************************************
  // ****************************************** DESKTOP STYLES ******************************************
  else {
    if (scrollTop > 300) {
      our_story.style.opacity = "1";
      home.style.opacity = "0";
      home.style.transition = "0ms";
    } else {
      our_story.style.opacity = "0";
      home.style.transition = "0ms";
    }

    if (scrollTop > 200)
      document.querySelector(".home .hero_cartoon").style.opacity = "0";
    else document.querySelector(".home .hero_cartoon").style.opacity = "1";

    //   TOKENOMICS
    if (scrollTop > 2000) {
      our_story.style.opacity = "0";
      tokenomic.style.opacity = "1";
      home.style.transition = "0ms";
      tokenomic.style.transition = "0ms";

      tokenomic.style.transform = `translateX(-${
        scrollTop * 0.19
      }px) translateY(${scrollTop*1.0001}px) scale(${
        scrollTop > 100 ? scrollTop * 1.2 : "100"
      }%)`;
    } else {
      tokenomic.style.transition = "0ms";
      tokenomic.style.opacity = "0";
    }

    // FOLLOW
    if (scrollTop > 9100) {
      if (scrollTop > 9170)
        document.getElementById("follow_1").style.opacity = "1";
      else document.getElementById("follow_1").style.opacity = "0";
      if (scrollTop > 9200)
        document.querySelector(".follow_img_1").style.transform = "scale(100%)";
      else
        document.querySelector(".follow_img_1").style.transform = "scale(0%)";
      if (scrollTop > 9230)
        document.getElementById("follow_2").style.opacity = "1";
      else document.getElementById("follow_2").style.opacity = "0";
      if (scrollTop > 9260)
        document.querySelector(".follow_img_2").style.transform = "scale(100%)";
      else
        document.querySelector(".follow_img_2").style.transform = "scale(0%)";
      if (scrollTop > 9290)
        document.getElementById("follow_3").style.opacity = "1";
      else document.getElementById("follow_3").style.opacity = "0";
      if (scrollTop > 9310)
        document.querySelector(".follow_img_3").style.transform = "scale(100%)";
      else
        document.querySelector(".follow_img_3").style.transform = "scale(0%)";
      if (scrollTop > 9340)
        document.getElementById("follow_4").style.opacity = "1";
      else document.getElementById("follow_4").style.opacity = "0";
      if (scrollTop > 9370)
        document.querySelector(".follow_img_4").style.transform = "scale(100%)";
      else
        document.querySelector(".follow_img_4").style.transform = "scale(0%)";

      tokenomic.style.opacity = "0";
      tokenomic.style.transition = "0ms";
      follow_section.style.opacity = "1";
      document.querySelector(
        ".follow"
      ).style.transform = `translateY(${9600}px) scale(${
        scrollTop > 100 ? "5010" : "100"
      }%)`;
      if (scrollTop >= 9600) {
        document.querySelector(
          ".follow"
        ).style.transform = `translateY(${scrollTop}px) scale(${
          scrollTop > 100 ? "5010" : "100"
        }%)`;
        follow_section.style.transition = "0ms"
        window.scrollTo(0, 9601)
      }
    } else {
      follow_section.style.opacity = "0";
    }

    //   KNOCKLE MAPS
    if (scrollTop > 9000) {
      tokenomic.style.opacity = "0";
      knockles.style.opacity = "0";
    } else if (scrollTop > 4500) {
      tokenomic.style.opacity = "0";
      tokenomic.style.userSelect = "none";
      knockles.style.opacity = "1";
      document.querySelector(
        ".knockle_maps"
      ).style.transform = `translateY(${scrollTop}px) scale(${
        scrollTop > 100 ? "5010" : "100"
      }%)`;

      const cards = document.querySelectorAll(".knockle_maps img");

      cards.forEach((card, index) => {
        // Adjust scrollTop based on the card index
        const adjustedScrollTop = scrollTop - index * 400; // Change the factor (500) as needed

        // Calculate the translation based on the adjusted scroll position
        const translationY =
          adjustedScrollTop > 6150
            ? -0.007 * (6150 - adjustedScrollTop)
            : 0.007 * (6150 - adjustedScrollTop);

        // Calculate the translation for translateX
        const translationX = adjustedScrollTop * -0.0075;

        // Apply the transformation to each card
        card.style.transform = `translate(${translationX}px, ${translationY}px)`;
      });
    } else {
      knockles.style.opacity = "0";
    }

    //   OUR STORY
    our_story.style.transform = `translateY(${
      scrollTop * 2.4
    }px) scale(${scrollTop > 100 ? scrollTop * 1.5 : "100"}%)`;

    //   HOME
    home.style.opacity = "1";
    home.style.transform = `translateY(${
      scrollTop * translate_factor
    }px) scale(${scrollTop > 100 ? scrollTop * scale_factor : "100"}%)`;
  }
}

window.addEventListener("scroll", updateAnimations);
