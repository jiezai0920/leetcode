/**
 * 难度： 简单
 * 题目地址：https://leetcode-cn.com/problems/remove-element/
 * 题目内容：
    给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

    不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

    元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

   demo1：
    给定 nums = [3,2,2,3], val = 3,
    函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
    你不需要考虑数组中超出新长度后面的元素。
   demo2：
    给定 nums = [0,1,2,2,3,0,4,2], val = 2,
    函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
    注意这五个元素可为任意顺序。
    你不需要考虑数组中超出新长度后面的元素。

   说明:
    为什么返回数值是整数，但输出的答案是数组呢?
    请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
*/


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 思路就是 声明变量i， 循环nums,判断循环当前元素不等于val的情况下，把nums的从新赋值，i++,得出新数组并且获得新数组length
var removeElement = function(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] != val) {
          nums[i] = nums[j];
          i++;
      }
  }
  return i;
};

console.log(removeElement([1,2,3,3,3,4,2,1], 3));
