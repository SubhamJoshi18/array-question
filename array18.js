function array18(a, b) {
  let aSum = a[0] + a[1];
  let bSum = b[0] + b[1];
  if (aSum === bSum) {
    return a;
  } else {
    return Math.max(aSum, bSum);
  }
}

let input1 = [1, 2];
let input2 = [3, 4];
console.log(array18(input1, input2));
