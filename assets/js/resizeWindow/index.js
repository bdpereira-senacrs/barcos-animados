const proportionScale = (width, height) => {
  const widthScreen = window.visualViewport.width;
  const heightScreen = window.visualViewport.height;
  const proporcaoHeight = (heightScreen * 100) / height;
  const proporcaoWidth = (widthScreen * 100) / width;

  if (proporcaoHeight < proporcaoWidth) {
    return [proporcaoHeight / 100, "height", "width"];
  } else {
    return [proporcaoWidth / 100, "width", "height"];
  }
};

export const resizeWindow = (selector = ".game") => {
  const proporcao1920 = proportionScale(1920, 1080)[0];
  const node = document.querySelector(selector);

  node.style.transform = `scale(${proporcao1920})`;
  node.style.transformOrigin = `center center`;

  let proporcao900;
  if (window.visualViewport.width < 992) {
    const btnsMobile = document.querySelector(".btnsMobile");
    proporcao900 = proportionScale(900, 576)[0];
    btnsMobile.style.top = `${1080 * proporcao1920}px`;
    node.style.transformOrigin = `top center`;
  } else {
    proporcao900 = 1;
  }
};
