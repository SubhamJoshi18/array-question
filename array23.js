function array23(nums) {
  const middleIndex = Math.floor(nums.length / 2);

  const maxVal = Math.max(nums[0], nums[middleIndex], nums[nums.length - 1]);
  return maxVal;
}
let input1 = [1, 2, 3];
console.log(array23(input1));
