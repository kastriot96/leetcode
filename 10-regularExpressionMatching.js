/*

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    s = '123';
    p = 'abc';
    return s + p
    //case 1 | check if very character of 's' matches with every character of 'p'
    //case 2 | check if for given characters of 's' and given pattern of 'p' there is aleast 1 character after the pattern char ( meaning exact char what is defined on p)
    //case 3 | check if for given charaters of 's' there are more one or more chars after the given 'p' condition with (.*)
};

console.log(isMatch());
