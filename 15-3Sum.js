/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.


Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.


Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  const threeSum = function(nums) {
//      for(i = 0; i <= nums.length; i++) {
//          if (nums[i] !== nums[i + 1] && nums[i] !== nums[i -1]) {
//              let sum = nums[i] + nums[i-1] + nums[i+1];
//              if (sum == 0) {
//                 console.log(`The array is ${nums[i-1]}, ${nums[i]}, ${nums[i+1]}`);
//              }
//          } else {
//              console.log('such number does not exist');
//          }
//      }
// };

//secodn solution 

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const triplets = [];
    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // Left and right pointers
        let j = i + 1;
        let k = n - 1;

        while (j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                triplets.push([nums[i], nums[j], nums[k]]);
                j++;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return triplets;
};

