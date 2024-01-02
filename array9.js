function array9(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.length < 2) {
      return [];
    } else {
      return nums[i] + nums[i + 1];
    }
  }
}

let input1 = [1, 2, 3];
console.log(array9(input1));
