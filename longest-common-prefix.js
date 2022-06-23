/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = (strs) => {
    let st = ''
    for(let i = 0; i < strs[0].length; i++) {
         for (let j = 1; j < strs.length; j++) {
             if (strs[0][i] !== strs[j][i]) {
                  return st
             } 
         }
        st += strs[0][i]
    }
    return st
};