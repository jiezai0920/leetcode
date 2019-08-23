/**
 * 难度： 简单
 * 题目地址：https://leetcode-cn.com/problems/reverse-integer/
 * 题目内容：
   给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

   demo1：
    输入: 123
    输出: 321
   demo2：
    输入: -123
    输出: -321
   demo3：
    输入: 120
    输出: 21

  注意:
    假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2的31次方,  2的31次方 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
*/


/**
 * @param {number} x
 * @return {number}
 */
 // 思路是先将x 绝对值，变成数组，result += 这个数组的尾部推出的值，如果x大于0 是正数，否则是负数再去判断是否超出范围
var reverse = function(x) {
    let arr = Math.abs(x).toString().split('');

    let result = '';
    for (const i = 0; i < arr.length; ) {
      result += arr.pop();
    }
    result = x > 0 ? Number(result) : - Number(result);

    if (result > Math.pow(2, 31) - 1 || result < - Math.pow(2, 31)) {
      result = 0;
    }
    console.log(result);
    return result;
};

reverse(-1234);

// 思路2数学算法
// 通过不断取余，然后x的绝对值 向下取整，当x的绝对值 等于0的时候 ，返回结果即可

var reverse2 = function(x) {
  let result = 0;
  let y = Math.abs(x);
  while (y != 0) {
    result = result * 10 + y % 10;
    y = Math.floor(y / 10);
    if (result > Math.pow(2, 31) - 1
    || result < -Math.pow(2, 31)) {
      result = 0;
      y = 0;
    }
  }
  return x > 0 ? result : -result;
};

reverse2(-1234);
