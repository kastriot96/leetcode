/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [...nums1, ...nums2];
    return mergedArray;
    //median is the middle number of array when is odd , or the average of two numbers when numbers of elements are even.
    //check if mergedArray is odd , if is odd return middle num , else if the array is even return average of two middle numbers
};

console.log(findMedianSortedArrays([1,2],[3]));
