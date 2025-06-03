
function FindMinimuminRotatedSortedArray(nums) {
    let min = Infinity;
    for(let i=0;i<nums.length;i++){
        if(min>nums[i]){
            min = nums[i]
        }
    }
    return min
};

FindMinimuminRotatedSortedArray([3, 4, 5, 1, 2]); // Output: 1
FindMinimuminRotatedSortedArray([4, 5, 6, 7, 0, 1, 2]); // Output: 0