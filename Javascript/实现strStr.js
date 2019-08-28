/**
 * 难度： 简单
 * 题目地址：https://leetcode-cn.com/problems/implement-strstr/
 * 题目内容：
    给定一个 haystack 字符串和一个 needle 字符串，在 haystack
    字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

   demo1：
    输入: haystack = "hello", needle = "ll"
    输出: 2
   demo2：
    输入: haystack = "aaaaa", needle = "bba"
    输出: -1

   说明:
    当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
    对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
*/


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// indexOf
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr('hello', 'll'));
console.log(strStr('hello', 'be'));
console.log(strStr('hello', ''));



var strStr2 = function(haystack, needle) {
  if (!haystack && !needle) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};
