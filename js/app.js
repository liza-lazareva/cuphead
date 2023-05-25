//404 parallax header start
document.addEventListener("mousemove", parallax);
function parallax(e){
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 150;
    const y = (window.innerHeight - e.pageY * speed) / 150;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
}

document.addEventListener("mousemove", parallax2);
function parallax2(e){
  this.querySelectorAll(".stickEyes").forEach((stickEyes) => {
    const speed = stickEyes.getAttribute("data-speed");
    const x = (window.innerWidth + e.pageX * speed) / 150;
    const y = (window.innerHeight + e.pageY * speed) / 150;

    stickEyes.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
}
//404 parallax header end

/*
image scrolltrigger start 
const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 30;

const currentFrame = (index) => `./images/cupheadIntroGallery/${(index + 1).toString()}.jpg`;

const images = [];
let PIC = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(PIC, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".about_text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "55%",
    },
    onComplete: () => {
      gsap.to(".about_text", { opacity: 0 });
    },
  }
);

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[PIC.frame], 0, 0);
}*/
// image scrolltrigger end 


// first fullscreen menu start
(() => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("overlay");
  let closed = true;

  const change = () => {
    if (closed) {
      hamburger.classList.add("open");
      menu.classList.add("menu");
    } else {
      hamburger.classList.remove("open");
      menu.classList.remove("menu");
    }
    closed = !closed;
  };

  hamburger.addEventListener("click", change);
})();


// charact start
var Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector("#my-scrollbar"), {
  speed: 0.5,
});

const tl = gsap.timeline();
tl.from(".sub-header", {
  y: -100,
  duration: 0.5,
  stagger: {
    amount: 0.4,
  },
});
tl.from(".line", {
  duration: 1,
  width: "0%",
  stagger: {
    amount: 2,
  },
});
tl.from(
  ".work-item h1, .work-item p",
  {
    y: 150,
    duration: 0.5,
    stagger: {
      amount: 2.5,
    },
  },
  "-=3"
);


// Cuphead modal start
// Открыть модальное окно
document.getElementById("char_title_Cuphead").addEventListener("click", function() {
  document.getElementById("my-modalCuphead").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modalCuphead").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modalCuphead").classList.remove("open")
  }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modalCuphead .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modalCuphead").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// ----------------------------------------------------------------------------------------

// Cuphead modal start
// Открыть модальное окно
document.getElementById("char_title_Kettle").addEventListener("click", function() {
  document.getElementById("my-modalKettle").classList.add("open2")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn2").addEventListener("click", function() {
  document.getElementById("my-modalKettle").classList.remove("open2")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modalKettle").classList.remove("open2")
  }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modalKettle .modal__box2").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modalKettle").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open2');
});



// accordion -----------------
$('.nav-toggle').click(function(){
	$('.nav-toggle').toggleClass('active');
  $('.nav-items').slideToggle();
});

