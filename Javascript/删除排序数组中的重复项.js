/**
 * 难度： 简单
 * 题目地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 题目内容：
   给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
   不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

   demo：
   给定数组 nums = [1,1,2],
   函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
   你不需要考虑数组中超出新长度后面的元素。

  说明:
    为什么返回数值是整数，但输出的答案是数组呢?
    请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
*/


/**
 * @param {number[]} nums
 * @return {number}
 */

 // 方法1
 // 第一反应就是「删除」重复元素。这里循环需要注意，nums.length会随着nums.splice的执行而改变，所以在for循环中我们不是每次都需要i++
var removeDuplicates = function(nums) {
  var cur = nums[0];
  for (var i = 1; i < nums.length;) {
      if (nums[i] === cur) {
        nums.splice(i, 1);
      } else {
        cur = nums[i++];
      }
  }
  return nums.length
};

// 方法2
// 考虑到splice性能不高，看到别人的方法 总结一下
// 该方法实际是从头设置数组。

var removeDuplicates = function (nums) {
    var len = 1;
    for (var i = 1; i < nums.length; i++) {
      if (nums[i] != nums[i-1]) {
        nums[len++] = nums[i];
      }
    }
    return len
};
