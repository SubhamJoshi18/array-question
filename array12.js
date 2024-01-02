function array12(nums) {
  if (nums.length === 2) {
    if (nums[0] || nums[1] === 2 || 3) {
      return true;
    } else {
      return false;
    }
  }
}
let input1 = [2, 5];
console.log(array12(input1));
