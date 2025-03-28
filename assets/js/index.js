const RELATIVEPATH = "../assets/";
const IMGS = `${RELATIVEPATH}imgs/`;

import { oceanImags } from "./sprites/ocean/index.js";
import { helicopterImgs } from "./sprites/helicopter/index.js";
import { mouthManImg, mouthWaiterImg } from "./sprites/mouths/index.js";

const animationNavio = document.querySelector(".front");
const animationNs = document.querySelectorAll(".front .n");
const animationP2 = document.querySelector(".front .p2");

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

let zero = performance.now();
let mouth = false;
const iterationMoth = [10, 20, 30, 40, 60, 120];

let frames = {
  ocean: 0,
  heli: 0,
  mouthMan: 0,
  mouthWaiter: 0,
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

  if (ocean) {
    ocean.setAttribute("src", `${IMGS}${oceanImags[frames.ocean]}`);
    if (aux.ocean < 6) {
      aux.ocean++;
    } else {
      aux.ocean = 0;
      frames.ocean++;
    }
    frames.ocean == oceanImags.length
      ? (frames.ocean = 0)
      : (frames.ocean = frames.ocean);
  }
  if (heli) {
    heli.setAttribute("src", `${IMGS}${helicopterImgs[frames.heli]}`);
    if (aux.heli < 2) {
      aux.heli++;
    } else {
      aux.heli = 0;
      frames.heli++;
    }
    frames.heli == helicopterImgs.length
      ? (frames.heli = 0)
      : (frames.heli = frames.heli);
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
  globalId = requestAnimationFrame(framesController);
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

if (animationP2)
  animationP2.addEventListener("mouseover", (e) => {
    const animationArm = document.querySelector(".arm img");
    animateArmInConfig.direction = "normal";
    animationArm.classList.toggle("high");
    animationArm.animate(animateArmIn, animateArmInConfig);
    mouth = true;
  });
animationP2.addEventListener("mouseout", (e) => {
  const animationArm = document.querySelector(".arm img");
  animationArm.classList.toggle("high");
  animateArmInConfig.direction = "reverse";
  animationArm.animate(animateArmIn, animateArmInConfig);
  mouth = false;
});
