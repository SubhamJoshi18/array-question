function array26(a, b) {
  if (a.length === b.length) {
    return [a[0], b[0]];
  } else if (a == [] || b == []) {
    return a[0] || b[0];
  } else {
    return [];
  }
}

let input1 = [1, 2, 3];
let input2 = [7, 6, 8];
console.log(array26(input1, input2));
