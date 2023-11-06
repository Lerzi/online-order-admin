import colors from './custom-theme.json';
// 适配tailwind css

// 将css样式 设置到HTML元素上
function setStyleToHtml() {
  // 定义一个空字符串
  let str = '';
  // 循环遍历每个颜色
  for (const key in colors) {
    str += `--${key}:${colors[key]};`;
  }
  // 给html元素 添加样式
  document.documentElement.style.cssText += str;
}

setStyleToHtml();

export default colors;
