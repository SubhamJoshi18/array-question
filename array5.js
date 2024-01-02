function array5(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.length === 3) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }
}

let input1 = [1, 2, 3];
console.log(array5(input1));
