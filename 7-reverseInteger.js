/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

*/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let n = Math.abs(x);
    let myArr = String(n).split("").map((n)=>{
        return n;
      });
    let indexArr = myArr.length - 1;

    if (myArr[indexArr] == 0) {
        let reversedArr = myArr.reverse().splice(1,indexArr).join("");
        return (x < 0 ? -1 : 1) * reversedArr;
    } else {
        let reversedArr = myArr.reverse().join("");
        return (x < 0 ? -1 : 1) * reversedArr;
    }
};

console.log(reverse(-2321));
