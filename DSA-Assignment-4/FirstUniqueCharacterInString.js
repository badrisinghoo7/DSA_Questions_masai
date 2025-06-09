function firstUniqChar(s) {
   let obj = {};
   for(let i=0;i<s.length;i++){
    if(obj[s[i]]==undefined){
        obj[s[i]] = 1;
    }
    else{
        obj[s[i]]++
    }
   }

   for(let key in obj){
    for(let i =0;i<s.length;i++){
        if(s[i]===key && obj[key]===1){
            return i
        }
    }
//    console.log(key)
   }
   return -1
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));