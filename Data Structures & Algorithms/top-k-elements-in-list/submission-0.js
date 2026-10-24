class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let num of nums){
            map.set(num,(map.get(num) || 0)+1);
        }

        let buckets = Array.from(
            {length : nums.length + 1},
            () => []);

        for(const [key,value] of map)
        {
            buckets[value].push(key);
        }

        const result = [];

        for(let i = buckets.length-1;i>=1;i--){
            for (const num of buckets[i]){
                result.push(num);
                if(result.length === k)
                {
                    return result;
                }
            }
        }
        return result;
    }
}
