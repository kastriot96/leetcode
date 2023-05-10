/*

Given a string s, return the longest palindromic substring in s.

*/

/**
 * @param {string} s
 * @return {string}
*/
var longestPalindrome = function(s) {
    let n = s.length;
    console.log(n);
    
    /* 

        loop through the string starting from index 0
        if n = 1 return palindrome as s
        if n = 2 return there is no palindrome
        if n > 2 start to check from index[j] === index[n-1] ; j[j+1] === index[n-2]
    
    */
    let res = 0;
     
    for(let i = 0; i < n; i++)
    {
        let palindrome = []
        
        for(let j = i; j < n; j++)
        {
         //logic
        }
    }
    return res;
};

console.log(longestPalindrome('babad'));
