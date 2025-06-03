
 function findPeakElement(nums) {
    let max = -Infinity
    let index = 0;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max = nums[i];
            index = i
        }
    }
    return index
};


console.log(findPeakElement([1, 2, 3, 1])); // Output: 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5