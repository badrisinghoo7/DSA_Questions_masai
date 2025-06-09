function longestConsecutive(nums) {
    if(nums.length<=1){
        return nums.length
    }
    nums.sort((a,b)=>{ return a-b})
     let count = 1;
    let max = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] === nums[i - 1] + 1) {
            count++;
        } else {
            count = 1;
        }
        max = Math.max(max, count);
    }

    return max;
    
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));