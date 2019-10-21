// new 到底做了什么？
//  1.创建了一个全新的对象。
//  2.这个对象会被执行[[Prototype]]（也就是__proto__）链接
//  3.生成的新对象会绑定到函数调用的this。
//  4.通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
//  5.如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。

function myNew (fn) {
  if(typeof fn !== 'function'){
      throw 'myNew 必须接收一个方法';
    }
  const newObj = Object.create(fn.prototype);
  const argsArr = [].slice.call(arguments, 1);
  const fnReturnResult = fn.apply(newObj, argsArr);
  const isObject = typeof fnReturnResult === 'object' && fnReturnResult !== null;
  const isFunction = typeof fnReturnResult === 'function';
  if(isObject || isFunction){
      return fnReturnResult;
  }
  return newObj;
}


// 例子
function Student(name) {
  this.name = name;
}

const s = myNew(Student, '李磊');

console.log(s);
