/*

Given a string s, return the longest palindromic substring in s.

*/

/**
 * @param {string} s
 * @return {string}
*/
var longestPalindrome = function(s) {
    let n = s.length;
    
    /* 

        loop through the string starting from index 0
        if n = 1 return palindrome as s
        if n = 2 return there is no palindrome
        if n > 2 start to check from index[j] === index[n-1] ; j[j+1] === index[n-2]
    
    */
     
    for(let i = 0; i < n; i++)
    {
        let palindrome = []
        
        for(let j = i; j < n/2; j++)
        {
            console.log('starting j: ', j);
            if (s[j] === s[n-1] && j !== n-2) {
                palindrome = s.slice(j, n);
                console.log('palindrome', palindrome);
                console.log(`result of j = ${j}|`, s[j], s[n-1]);
            }
            n--;
            console.log('n after decrement:', n);
        }
    }
};
