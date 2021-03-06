/**
 * 获取元素
 */

function my$(id) {
  return document.getElementById(id);
}

// 绑定事件的兼容
function addEventListener(element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, fn);
  } else {
    element['on' + type] = fn;
  }
}


// 解绑事件的兼容
// 为任意的一个元素，绑定对应的事件
function removeEventListener(element, type, fnName) {
  if (element.removeEventListener) {
    element.removeEventListener(type, fnName, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, fnName);
  } else {
    element['on' + type] = null;
  }
}


// 设置元素的文本内容 -- element: 任意元素，text: 任意文本
function setInnerText(element, text) {
  if (typeof element.textContent == 'undefined') {
    element.innerText = text;
  } else {
    element.textContent = text;
  }
}



// animate动画函数
function animate(element, target) {
  // 先清理定时器
  clearInterval(element.timeId);
  element.timeId = setInterval(function () {
    // 获取div的当前的位置
    var current = element.offsetLeft; // 数字类型，没有px
    // div每次移动多少像素 --- 步数
    var step = 10;
    // 每次移动后的距离
    step = current < target ? step : -step
    current += step;
    // 判断当前移动后的位置是否达到目标位置
    if (Math.abs(target - current) > Math.abs(step)) {
      // 设置div的目标位置
      element.style.left = current + 'px';
    } else {
      // 到达目标，清理定时器
      clearInterval(element.timeId);
      element.style.left = target + 'px';
    }
  }, 14);
}


// 变速动画
function animateChange(element, target) {
  // 清理定时器
  clearInterval(element.timeId);
  element.timeId = setInterval(function () {
    // 获取元素的当前位置
    var current = element.offsetLeft;
    // 移动的步数
    var step = (target - current) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    current += step;
    element.style.left = current + 'px';
  }, 20);
}





// 封装的getScroll函数
function getScroll() {
  // 返回对象
  return {
    // 向上卷曲出去的距离
    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,

    // 向左卷曲出去的距离
    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
  }
}