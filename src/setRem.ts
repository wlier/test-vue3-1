// import debounce from "lodash/debounce";

// export const setDomFontSize = () => {
//   const width =
//     document.documentElement.clientWidth || document.body.clientWidth;
//   const fontSize = (width <= 1200 ? 1200 : width) / 100 + "px";
//   document.getElementsByTagName("html")[0].style.fontSize = fontSize;
// };

// const setDomFontSizeDebounce = debounce(setDomFontSize, 500);
// window.addEventListener("resize", setDomFontSizeDebounce);

// 基准大小
const baseSize = 18;
// 设置 rem 函数
const setRem = () => {
  // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 1920;
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
};
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem();
};

export { setRem };
