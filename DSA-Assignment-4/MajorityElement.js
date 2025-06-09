function majorityElement(nums) {
    if(nums.length==1){
        return nums[0]
    }
    let obj = {}
    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1
        }else{
            obj[nums[i]]++
        }
    }
    // console.log(obj)
    let ans = 0
    let count = 0
    for(let key in obj){
        if(obj[key]>=2 && obj[key]>=count){
           ans = +key
           count = obj[key]
        }
    }
    return ans
    // return -1
};

console.log(majorityElement([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]));
console.log(majorityElement([1,2,3,4,5,6,7,8,9,10]));


