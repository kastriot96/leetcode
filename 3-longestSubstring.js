/* 

Given a string s, find the length of the longest 
substring
 without repeating characters.

*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
     // the idea is to compare each ascii value , and find the longest consecutive ascii from index start to index end then convert again ascii to char and we get the longest substring
    let mapString = Array.from(s);
    console.log(mapString);
    let asciiArray = [];
    let longestAscii = [];
    for (let i = 0; i < s.length; i++) {
        asciiArray.push(s.charCodeAt(i));
      }
    for (let i = 0; i < asciiArray.length; i++) {
        console.log('el[i]', asciiArray[i]);
        let currentEl = asciiArray[i];
        let nextEl = asciiArray[i+1];
    }
    console.log('asciiArray', asciiArray);
    console.log('longestAscii', longestAscii);
};

console.log(lengthOfLongestSubstring('jashari'));
