function array16(nums) {
  if (nums[0] === 2 && nums[2] === 3) {
    nums[1] = 0;
  } else if (nums[0] === 2 && nums[1] === 3) {
    {
      return (nums[1] = 0);
    }
  }
  return nums;
}
let input1 = [1, 2, 3];
console.log(array16(input1));
