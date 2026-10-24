class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map1 = new Map();
        const map2 = new Map();

        if(s.length !== t.length)
        {
            return false;
        }

        for(let word of s)
        {
            if(map1.has(word))
            {
                            map1.set(word,map1.get(word)+1);
            }
            else
            {
                map1.set(word,1);
            }
        }


        for(let word of t)
        {
            if(map2.has(word))
            {
                            map2.set(word,map2.get(word)+1);
            }
            else
            {
                map2.set(word,1);
            }
        }

        for(const [key,value] of map1)
        {
            if(!map2.has(key) || map2.get(key)!== value)
            {
                return false;
            }
        }
        return true;

    }
}
