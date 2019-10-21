//函数防抖  当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时
// 适用场景  1.input输入框
//          2.滚动条上下滑动等
// 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行
function debouce(fn) {
  let timeout = null;
  return function () {
    cleatTimeout(timeout);

    timeout = setTimeout(() => {
      fn.call(this, arguments);
    }, 1000);
  }
}




//函数节流   当持续触发事件时，保证一定时间段内只调用一次事件处理函数

function throttle(fn) {
  let flag = true;
  return function () {
    if(!flag) {
      return;
    }

    flag = false;

    setTimeout( () => {
      fn.call(this, arguments);
      flag = true;
    }, 1000);
  };
}
