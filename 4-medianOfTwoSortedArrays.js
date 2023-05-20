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
    let lengthArr = mergedArray.length;
    if (lengthArr % 2 === 0) {
        console.log('this is even');
    } else {
        let indexOdd = Math.ceil(lengthArr / 2);
        let median = mergedArray[indexOdd];
        console.log('this is odd',median);
    }
    return lengthArr;
};

console.log(findMedianSortedArrays([1,2,5,2,3,4,4],[3,7]));
