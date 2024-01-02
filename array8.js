function array8(nums) {
  const max = Math.max(nums[0], nums[2]);
  return [max, max, max];
}

let input1 = [1, 2, 3];
console.log(array8(input1));
