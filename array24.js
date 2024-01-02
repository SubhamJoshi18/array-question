function array24(nums) {
  if (nums.length === 3) {
    return [nums[0], nums[1]];
  } else if (nums.length === 2) {
    return [nums[0], nums[1]];
  } else {
    return nums[0];
  }
}

let input1 = [1, 2, 3];
console.log(array24(input1));
