/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var result = [];
  var map = {};
  for(var i = 0; i < nums.length; i++) {
    if(map[target - nums[i]] !== undefined) {
      result.push(map[target - nums[i]]);
      result.push(i);
    }
    map[nums[i]] = i;
};
