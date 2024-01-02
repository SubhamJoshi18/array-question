function array17(a, b) {
  let count = 0;
  if (a[0] === b[0]) {
    count += 2;
  } else if (a[0] !== b[0]) {
    count += 1;
  }
  return count;
}

let input1 = [1, 2, 3];
let input2 = [1, 3];
console.log(array17(input2, input1));
