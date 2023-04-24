/**
 * @param {number} n
 * @return {Function} counter
 */

//  const createCounter = (n) =>  {
//     let output = [];
//     output = Array(3).fill().map((_, index) => index + n);
//     console.log(output);
//   };
  
//   createCounter(10)

 const createCounter = (n) => {
    let num = n - 1;
    return () => {
        num++
        return num;
    };
};