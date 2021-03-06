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