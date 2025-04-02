const RELATIVEPATH = "./assets/";
const IMGS = `${RELATIVEPATH}imgs/`;

import { oceanImags } from "./sprites/ocean/index.js";
import { helicopterImgs } from "./sprites/helicopter/index.js";
import { mouthManImg } from "./sprites/mouths/index.js";
import { resizeWindow } from "./resizeWindow/index.js";

resizeWindow(".scene");
window.addEventListener("resize", (e) => {
  resizeWindow(".scene");
});

const animationNavio = document.querySelector(".front");
const animationNs = document.querySelectorAll(".front .n");

const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const n4 = document.querySelector(".n4");
const h = document.querySelector(".h");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

animationNavio.addEventListener("animationend", () => {
  animationNavio.classList.add("wave");
  animationNs.forEach((el) => {
    el.classList.add("wave");
  });
});

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
  mouthWaiter: 0,
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
  mouthWaiter: 0,
};

const framesController = (timestamp) => {
  const ocean = document.querySelector(".mar");
  const heli = document.querySelector(".heli");
  const mouthMan = document.querySelector(".mouthMan img");

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

if (p2)
  p2.addEventListener("mouseover", (e) => {
    const animationArm = document.querySelector(".arm img");
    const img = document.querySelector(".mouthWaiter img");
    const tray = document.querySelector(".tray img");
    p3.querySelector("img").classList.toggle("high");
    tray.classList.toggle("high");
    img.classList.toggle("high");
    img.classList.toggle("mouth2");
    img.classList.toggle("mouth1");
    img.setAttribute(
      "src",
      "./assets/imgs/pngs_casal_cruzeiro/boca_garcon_02.png"
    );

    animateArmInConfig.direction = "normal";
    animationArm.classList.toggle("high");
    animationArm.animate(animateArmIn, animateArmInConfig);
    mouth = true;
  });
p2.addEventListener("mouseout", (e) => {
  const mouthP2 = document.querySelector(".mouthMan img");
  const animationArm = document.querySelector(".arm img");
  const img = document.querySelector(".mouthWaiter img");
  const tray = document.querySelector(".tray img");
  p3.querySelector("img").classList.toggle("high");
  tray.classList.toggle("high");
  img.classList.toggle("high");
  img.classList.toggle("mouth2");
  img.classList.toggle("mouth1");
  img.setAttribute(
    "src",
    "./assets/imgs/pngs_casal_cruzeiro/boca_garcon_01.png"
  );

  animationArm.classList.toggle("high");
  animateArmInConfig.direction = "reverse";
  animationArm.animate(animateArmIn, animateArmInConfig);
  mouth = false;
  mouthP2.setAttribute(
    "src",
    "./assets/imgs/pngs_casal_cruzeiro/boca_homem_01.png"
  );
});

if (p3)
  p3.addEventListener("mouseover", (e) => {
    const animationArm = document.querySelector(".arm img");
    const img = document.querySelector(".mouthWaiter img");
    const tray = document.querySelector(".tray img");
    p2.querySelector("img").classList.toggle("high");
    tray.classList.toggle("high");
    img.classList.toggle("mouth2");
    img.classList.toggle("mouth1");
    img.setAttribute(
      "src",
      "./assets/imgs/pngs_casal_cruzeiro/boca_garcon_02.png"
    );

    animateArmInConfig.direction = "normal";
    animationArm.classList.toggle("high");
    animationArm.animate(animateArmIn, animateArmInConfig);
    mouth = true;
  });
p3.addEventListener("mouseout", (e) => {
  const mouthP2 = document.querySelector(".mouthMan img");
  const animationArm = document.querySelector(".arm img");
  const img = document.querySelector(".mouthWaiter img");
  const tray = document.querySelector(".tray img");
  p2.querySelector("img").classList.toggle("high");
  tray.classList.toggle("high");
  img.classList.toggle("mouth2");
  img.classList.toggle("mouth1");
  img.setAttribute(
    "src",
    "./assets/imgs/pngs_casal_cruzeiro/boca_garcon_01.png"
  );
  animationArm.classList.toggle("high");
  animateArmInConfig.direction = "reverse";
  animationArm.animate(animateArmIn, animateArmInConfig);
  mouth = false;
  mouthP2.setAttribute(
    "src",
    "./assets/imgs/pngs_casal_cruzeiro/boca_homem_01.png"
  );
});

// funções para excutar quando clicar

p2.addEventListener("click", (e) => {
  alert("Homem Clicado");
});
p3.addEventListener("click", (e) => {
  alert("Garçom Clicado");
});

n2.addEventListener("click", (e) => {
  alert("Navio 2 Clicado");
});
n3.addEventListener("click", (e) => {
  alert("Navio 3 Clicado");
});
n4.addEventListener("click", (e) => {
  alert("Barquinho Clicado");
});
h.addEventListener("click", (e) => {
  alert("Helicóptero Clicado");
});
