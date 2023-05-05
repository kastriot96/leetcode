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
     // the idea is to compare each ascii value , and find the longest consecutive ascii 
     // from index start to index end then convert again ascii to char and we get the longest substring
    let mapString = Array.from(s);
    console.log(mapString);
    let asciiArray = [];
    for (let i = 0; i < s.length; i++) {
        asciiArray.push(s.charCodeAt(i));
      }
    console.log('asciiArray', asciiArray);
};

console.log(lengthOfLongestSubstring('jashari'));
