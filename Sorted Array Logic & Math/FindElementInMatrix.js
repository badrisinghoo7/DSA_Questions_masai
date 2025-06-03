
function SearchMatrix(mat, t) {
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<=mat[i].length;j++){
            if(mat[i][j]===t){
                // console.log(mat[i][j])
                return true
            }
        }
    }
    return false
};

console.log(SearchMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)); // Output: true
console.log(SearchMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 10)); // Output: false