/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let startIndex = 0;
    let maxLength = 1;
    
    function expandAroundCenter(left, right) {
        while (left >=0 && right < s.length && s[left] === s[right]) {
            const currentPalLength = right - left + 1;
            if (currentPalLength > maxLength) {
                maxLength = currentPalLength;
                startIndex = left;
            }
            left -= 1;
            right += 1;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
            expandAroundCenter(i-1, i+1);
            expandAroundCenter(i, i+1);
        }
    
    return s.slice(startIndex, startIndex + maxLength)
};
