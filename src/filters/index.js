// 常用数字精度换算
export function toFixed(val, num = 2) {
  if (isNaN(val)) {
    return 0;
  }
  return (val * 1).toFixed(num) * 1;
}

// 限制字数显示
export function wordLimit(val, limitCount = 9999) {
  if (!val) {
    return val;
  }
  var realLen = 0;
  var tmpStr = '';
  for (var i = 0, len = val.length; i < len; i++) {//遍历字符串
    realLen += /[\u4e00-\u9fa5]/.test(val[i]) ? 2 : 1;
    if (realLen > limitCount) {
      break;
    } else {
      tmpStr += val[i];
    }
  }
  return `${tmpStr}${realLen > limitCount ? '...' : ''}`;
}
