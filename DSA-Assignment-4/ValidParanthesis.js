function isValid(s) {
    let st = [];
    let count = 0
    for(let i=0;i<s.length;i++){
        if(s[i]=="(" || s[i]=="{" || s[i]=="[" ){
            st.push(s[i])
        }else if(s[i]==")" && st[st.length-1]=="(" && st.length>0){
            st.pop()
            count++
        }else if(s[i]=="]" && st[st.length-1]=="["&& st.length>0){
            st.pop()
            count++
        }
        else if(s[i]=="}" && st[st.length-1]=="{"&& st.length>0){
            st.pop()
            count++
        }else{
            return false
        }
    //    return false
        
    }
    
    return st.length===0
};

console.log(isValid("()"));
console.log(isValid("()[]{}")); 