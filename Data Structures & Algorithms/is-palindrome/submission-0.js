class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let arr = [];
    s=s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();;
    for(let num of s){
        
        arr.push(num);
        
    }

    let reversed = arr.toReversed();

    if (arr.join("") === reversed.join("")){
        return true;
    }
    return false;
    }
}
