/*

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

*/

/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    let arrayOfDigits = Array.from(String(num), Number);
    console.log('arrayOfDigits', arrayOfDigits);
    let sumOfDigits = arrayOfDigits.reduce((total, item) => total + item)
    console.log('sumOfDigits', sumOfDigits);
    if (sumOfDigits > 9 || arrayOfDigits > 9) {
        arrayOfDigits = arrayOfDigits.reduce((total, item) => total + item)
        arrayOfDigits = Array.from(String(arrayOfDigits), Number);
        sumOfDigits = arrayOfDigits.reduce((total, item) => total + item);
        if (sumOfDigits > 9 || arrayOfDigits > 9) {
            arrayOfDigits = arrayOfDigits.reduce((total, item) => total + item)
            arrayOfDigits = Array.from(String(arrayOfDigits), Number);
            sumOfDigits = arrayOfDigits.reduce((total, item) => total + item);
            return sumOfDigits;
        }
        return sumOfDigits;
    }
   return sumOfDigits;
};
console.log(addDigits(123212));
console.log(0);
console.log(addDigits(19));
console.log(addDigits(199));
console.log(addDigits(1999));
