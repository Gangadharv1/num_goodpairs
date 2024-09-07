function numIdenticalPairs(nums) {
    let count = 0;
    let map = {};
    for (let num of nums) {
        if (map[num]) {
            count += map[num];
            map[num]++;
        } else {
            map[num] = 1;
        }
    }
    return count;
}
