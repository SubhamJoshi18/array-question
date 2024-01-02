function array6(nums) {
  const [first, ...rest] = nums;
  return [...rest, first];
}

let input1 = [1, 2, 3];
console.log(array6(input1));
