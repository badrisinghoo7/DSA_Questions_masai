
function xPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += (j === i || j === n - 1 - i) ? "*" : " ";
    }
    console.log(row);
  }
}
xPattern(5);
