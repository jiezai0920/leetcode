/**
 * 难度： 简单
 * 题目地址：https://leetcode-cn.com/problems/two-sum/
 * 题目内容：
   给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
   你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

   demo：
   给定 nums = [2, 7, 11, 15], target = 9

   因为 nums[0] + nums[1] = 2 + 7 = 9
   所以返回 [0, 1]
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const nums = [2, 7, 11, 15], target = 9;

 // 最简单的循环遍历， 也是最消耗性能
const twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
};

console.log(twoSum(nums, target));

// 参考答案中比较优秀的方法
// 思路是，一遍遍历，保存每个数要找的值是什么，查看映射池里我是不是被找的数，如果不是那我就保存我要找的数，找到了即返回
var twoSum2 = function(nums, target) {
  let lookupTable = []

  for (let i = 0; i < nums.length; i++) {
    if (lookupTable[target - nums[i]] != null) {
      return [i, lookupTable[target - nums[i]]]
    }

    lookupTable[nums[i]] = i
  }
};

console.log(twoSum2(nums, target));

var twoSum3 = function(nums, target) {
    let res = {}

    for(let i = 0; i < nums.length; i++) {
      if(res[nums[i]] !== undefined) {
        return [res[nums[i]], i]
      } else {
        res[target - nums[i]] = i
      }
    }
}

console.log(twoSum3(nums, target));
