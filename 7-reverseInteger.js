/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

*/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let myArr = String(x).split("").map((x)=>{
        return Number(x)
      });
    let myArrRev = myArr.reverse();
    console.log(myArrRev);

    if (myArrRev[0] === 0) {
        return myArrRev.splice(1,myArrRev.length).join("");
    } else {
        return myArrRev.join("");
    }
};

console.log(reverse(-231));

//need to be checked for negative numbers
