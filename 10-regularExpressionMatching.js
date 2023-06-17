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
function isMatch(str, pat) {
    return recursiveIsMatch(0, 0, str, pat);
}
function recursiveIsMatch(i, j, str, pat) {
    const inputStringLength = str.length;
    const patternLength = pat.length;

    if (j == patternLength) {
        return i == inputStringLength;
    }

    if (j + 1 < patternLength && pat.charAt(j + 1) == '*') {
        if (recursiveIsMatch(i, j + 2, str, pat)) return true;

        while (
            i < inputStringLength &&
            (pat.charAt(j) == '.' || str.charAt(i) == pat.charAt(j))
        ) {
            if (recursiveIsMatch(++i, j + 2, str, pat)) return true;
        }
    }
    else if (
        i < inputStringLength &&
        (pat.charAt(j) == '.' || str.charAt(i) == pat.charAt(j))
    ) {
        return recursiveIsMatch(i + 1, j + 1, str, pat);
    }

    return false;
}
