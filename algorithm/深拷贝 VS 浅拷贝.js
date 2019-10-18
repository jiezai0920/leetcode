// 浅拷贝 浅拷贝时判断属性值是否是对象，如果是对象就进行递归操作 实际就是赋值给另一个对象
const obj = {
  'name': 'lilei',
  'age': 20,
}

function ShallowCopy(data) {
  let target = {};

  for (let p in data) {
    if (data.hasOwnProperty(p)) {
      target[p] = data[p];
    }
  }

  return target;
}

const obj2 = ShallowCopy(obj);
obj2.name = 'hanmeimei';
obj2.age = 18;


console.log(obj);
console.log(obj2);



// 深拷贝是对对象以及对象的所有子对象进行拷贝

// 最简单的 大家都会递归实现深拷贝

// 测试用例
var a = {
    name: "lilei",
    age: 22,
    likes: {
        color: "red",
        sport: "running"
    },
    a1: undefined,
    a2: null,
}

function isObject(obj) {
	return typeof obj === 'object' && obj != null;
}

function cloneDeep(source) {
   // 非对象返回自身
  if (!isObject(source)) return source;
  // 判断是否是对象
  var target = Array.isArray(source) ? [] : {};

  for(var key in source) {
    // 判断 当前key是否在对象里
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      // 判断 当前key是否是对象 并且不是 null  是对象就递归
      if (isObject(source[key])) {
         // 注意这里  递归
        target[key] = cloneDeep(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

var b = cloneDeep(a);
console.log(b);
b.likes.color = 'blue';
console.log(a);
console.log(b);
