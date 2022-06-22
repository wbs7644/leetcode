/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = (x) => {
    const paramsToString = String(x)
    const toNumber = Number(paramsToString)
    const rev = Number(String(x).split('').reverse().join(''))
    
    if (toNumber == rev) {
        return true
    } else {
        return false
    }
};