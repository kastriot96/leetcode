/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {

    if(numRows === 1 || s.length < numRows) return s;

    let direction = false;
    let count = 0;

    let arr = new Array(numRows).fill("");

    for(let i = 0; i < s.length; i++) {
        let current = s[i];

        arr[count] += current;
        if(count === 0 || count >= numRows - 1) direction = !direction;
        direction ? count++ : count--;
    }

    return arr.join("");
};
