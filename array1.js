function array1(nums) {
  return nums[0] === 6 || nums[nums.length - 1] === 6;
}

let input1 = [1, 2, 6];
console.log(array1(input1));
