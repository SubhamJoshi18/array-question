function array13(nums) {
  if (nums.length === 2) {
    if (nums[0] || nums[1] !== 2 || 3) {
      return true;
    } else {
      return false;
    }
  }
}

let input1 = [4, 5];
console.log(array13(input1));
