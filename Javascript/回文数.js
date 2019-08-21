/**
 * 难度： 简单
 * 题目地址：https://leetcode-cn.com/problems/palindrome-number/
 * 题目内容：

   判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。


   demo：
   示例 1:
     输入: 121
     输出: true
   示例 2:
    输入: -121
    输出: false
    解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
   示例 3:
    输入: 10
    输出: false
    解释: 从右向左读, 为 01 。因此它不是一个回文数。

   进阶:
   你能不将整数转为字符串来解决这个问题吗？
*/


/**
 * @param {number} x
 * @return {boolean}
 */
 // 方法1  这个方法不在进阶之内，通过转换字符串，切割数组反转判断
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
      return false;
    }
    const str = x + "";
    const arr = str.split("");
    const arr1 = [...arr];
    arr1.reverse()
    const str1 = arr1.join("");
    return str === str1;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

var isPalindrome2 = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let reverseResult=0;
  while(x > reverseResult){
    reverseResult = reverseResult * 10 + x % 10;
    console.log(reverseResult, 'reverseResult');
    x = parseInt(x / 10);
    console.log(x, 'x');
  }
  return x === reverseResult || x === parseInt(reverseResult / 10);
};
console.log(isPalindrome2(121));
console.log(isPalindrome2(-121));
console.log(isPalindrome2(10));
