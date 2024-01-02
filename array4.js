function array4(a, b) {
  return a[0] === b[0] || a[a.length - 1] === b[b.length - 1];
}

let input1 = [1, 2, 3];
let input2 = [7, 3];
console.log(array4(input1, input2));
