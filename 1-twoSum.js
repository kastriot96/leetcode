/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      target = 1
      // To store the required sum
      var sum = 0;
      var i, j;
         
      // Nested loop for all possible pairs
      for(i = 0; i <= nums.length - 1; i++)
      {
          for(j = i + 1; j <= nums.length - 1; j++)
          {
              sum += (nums[i] + nums[j]);
              console.log('value of i:', nums[i]);
              console.log('value of j:', nums[j]);
          }
      }
        return Math.max(sum);
 };
