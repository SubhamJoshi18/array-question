function array11(nums) {
  if (nums.length >= 1) {
    return [nums[0], nums[nums.length - 1]];
  }
}

let input1 = [1, 2, 3];
console.log(array11(input1));
