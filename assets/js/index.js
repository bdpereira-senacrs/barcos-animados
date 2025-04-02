const RELATIVEPATH = "./assets/";
const IMGS = `${RELATIVEPATH}imgs/`;

import { oceanImags } from "./sprites/ocean/index.js";
import { helicopterImgs } from "./sprites/helicopter/index.js";
import { mouthManImg } from "./sprites/mouths/index.js";
import { resizeWindow } from "./resizeWindow/index.js";
import { fadeIn, fadeOut } from "./animations/animations.js";

resizeWindow(".scene");
window.addEventListener("resize", (e) => {
  resizeWindow(".scene");
});

const scene = document.querySelector(".scene");
const front = document.querySelector(".front");
const boats = front.querySelectorAll(".n");

const ocean = document.querySelector(".mar");
const heli = document.querySelector(".heli");

const mouthMan = document.querySelector(".mouthMan img");
const arm = document.querySelector(".arm img");
const mouthWaiter = document.querySelector(".mouthWaiter img");
const tray = document.querySelector(".tray img");

const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const n4 = document.querySelector(".n4");
const h = document.querySelector(".h");

const p2Img = document.querySelector(".p2 img");
const p3Img = document.querySelector(".p3 img");
const n2Img = document.querySelector(".n2 img");
const n3Img = document.querySelector(".n3 img");
const n4Img = document.querySelector(".n4 img");
const hImg = document.querySelector(".h img");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// inicio do controle das animações por sprites

let globalId;

let then = {
  ocean: performance.now(),
  heli: performance.now(),
};
let mouth = false;
const iterationMoth = [10, 20, 30, 40, 60, 120];

let frames = {
  ocean: 0,
  heli: 0,
  mouthMan: 0,
};
let fps = {
  ocean: 12,
  heli: 12,
};
let interval = {
  ocean: 1000 / fps.ocean,
  heli: 1000 / fps.heli,
};

let aux = {
  ocean: 0,
  heli: 0,
  mouthMan: 0,
};

const framesController = (timestamp) => {
  globalId = requestAnimationFrame(framesController);

  if (ocean) {
    let e = timestamp - then.ocean;
    if (e > interval.ocean) {
      then.ocean = timestamp - (e % interval.ocean);
      ocean.setAttribute("src", `${IMGS}${oceanImags[frames.ocean]}`);
      frames.ocean++;
      frames.ocean == oceanImags.length
        ? (frames.ocean = 0)
        : (frames.ocean = frames.ocean);
    }
  }
  if (heli) {
    let e = timestamp - then.heli;
    if (e > interval.heli) {
      then.heli = timestamp - (e % interval.heli);
      heli.setAttribute("src", `${IMGS}${helicopterImgs[frames.heli]}`);
      frames.heli++;
      frames.heli == helicopterImgs.length
        ? (frames.heli = 0)
        : (frames.heli = frames.heli);
    }
  }
  if (mouthMan && mouth) {
    mouthMan.setAttribute("src", `${IMGS}${mouthManImg[frames.mouthMan]}`);
    if (aux.mouthMan < iterationMoth[getRandomInt(iterationMoth.length)]) {
      aux.mouthMan++;
    } else {
      aux.mouthMan = 0;
      frames.mouthMan++;
    }
    frames.mouthMan == mouthManImg.length
      ? (frames.mouthMan = 0)
      : (frames.mouthMan = frames.mouthMan);
  }
};

globalId = requestAnimationFrame(framesController);

// Final do controle das animações por sprites

// Início do controle das animações de hover
const animateArmIn = [
  {
    transform: "rotateZ(45deg)",
  },
  {
    transform: "rotateZ(10deg)",
  },
];

const animateArmInConfig = {
  duration: 1000,
  iterations: 1,
  fill: "both",
  direction: "normal",
};

const toggleHigh = (nodes) => {
  nodes.forEach((node) => {
    node.classList.toggle("high");
  });
};

if (p2) {
  p2.addEventListener("mouseover", (e) => {
    toggleHigh([p3Img, mouthWaiter, tray, arm, p2Img]);
    mouthWaiter.classList.toggle("mouth2");
    mouthWaiter.classList.toggle("mouth1");
    mouthWaiter.setAttribute(
      "src",
      "./assets/imgs/pngs_casal_cruzeiro/boca_garcon_02.png"
    );

    animateArmInConfig.direction = "normal";
    arm.animate(animateArmIn, animateArmInConfig);
    mouth = true;
  });
  p2.addEventListener("mouseout", (e) => {
    toggleHigh([p3Img, tray, arm, p2Img]);
    mouthWaiter.classList.toggle("mouth2");
    mouthWaiter.classList.toggle("mouth1");
    mouthWaiter.setAttribute(
      "src",
      "./assets/imgs/pngs_casal_cruzeiro/boca_garcon_01.png"
    );
    animateArmInConfig.direction = "reverse";
    arm.animate(animateArmIn, animateArmInConfig);
    mouth = false;
    mouthMan.setAttribute(
      "src",
      "./assets/imgs/pngs_casal_cruzeiro/boca_homem_01.png"
    );
  });
}

if (p3) {
  p3.addEventListener("mouseover", (e) => {
    toggleHigh([p3Img, tray, arm, p2Img]);
    mouthWaiter.classList.toggle("mouth2");
    mouthWaiter.classList.toggle("mouth1");
    mouthWaiter.setAttribute(
      "src",
      "./assets/imgs/pngs_casal_cruzeiro/boca_garcon_02.png"
    );
    animateArmInConfig.direction = "normal";
    arm.animate(animateArmIn, animateArmInConfig);
    mouth = true;
  });
  p3.addEventListener("mouseout", (e) => {
    toggleHigh([p3Img, tray, arm, p2Img]);
    mouthWaiter.classList.toggle("mouth2");
    mouthWaiter.classList.toggle("mouth1");
    mouthWaiter.setAttribute(
      "src",
      "./assets/imgs/pngs_casal_cruzeiro/boca_garcon_01.png"
    );
    animateArmInConfig.direction = "reverse";
    arm.animate(animateArmIn, animateArmInConfig);
    mouth = false;
    mouthMan.setAttribute(
      "src",
      "./assets/imgs/pngs_casal_cruzeiro/boca_homem_01.png"
    );
  });
}
if (n3) {
  n3.addEventListener("mouseover", (e) => toggleHigh([n3Img, n4Img]));
  n3.addEventListener("mouseout", (e) => toggleHigh([n3Img, n4Img]));
}
if (n4) {
  n4.addEventListener("mouseover", (e) => toggleHigh([n3Img, n4Img]));
  n4.addEventListener("mouseout", (e) => toggleHigh([n3Img, n4Img]));
}
// Final do controle das animações de hover

// função para abrir modal
const openModal = (modal) => {
  alert(`Abriu a modal ${modal}`);
};

// Auxiliares para abrir a modal correta
p3.addEventListener("click", (e) => p2.click());
n4.addEventListener("click", (e) => n3.click());

p2.addEventListener("click", (e) => {
  openModal("Homem e Garçom");
});
n2.addEventListener("click", (e) => {
  openModal("Navio 02");
});
n3.addEventListener("click", (e) => {
  openModal("Navio 03 e barquinho");
});
h.addEventListener("click", (e) => {
  openModal("Helicóptero");
});

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  setTimeout(() => {
    const preloader = document.querySelector(".preloader");
    fadeOut(preloader, null, 1000);
    fadeIn(scene, preloader, 1000);
  }, 1000);
});
