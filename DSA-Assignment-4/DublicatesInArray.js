function findDuplicates(nums) {
    let res = [];
    let obj = {}
    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1
        }else{
            obj[nums[i]]++
        }
    }
    // console.log(obj)
    for(let key in obj){
        if(obj[key]>1){
            res.push(+key);
        }
    }
    return res;
    
};

console.log(findDuplicates([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]));
console.log(findDuplicates([1,2,3,4,5,6,7,8,9,10])); 
