/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

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

// 参考答案中比较优秀的方法
// 思路是，一遍遍历，保存每个数要找的值是什么，查看映射池里我是不是被找的数，如果不是那我就保存我要找的数，找到了即返回
var twoSum = function(nums, target) {
  let lookupTable = []

  for (let i = 0; i < nums.length; i++) {
    if (lookupTable[target - nums[i]] != null) {
      return [i, lookupTable[target - nums[i]]]
    }

    lookupTable[nums[i]] = i
  }
};

var twoSum = function(nums, target) {
    let res = {}

    for(let i = 0; i < nums.length; i++) {
      if(res[nums[i]] !== undefined) {
        return [res[nums[i]], i]
      } else {
        res[target - nums[i]] = i
      }
    }
}
