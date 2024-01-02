function array25(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1 && nums[i + 1] === 3) {
      return true;
    } else {
      return false;
    }
  }
}
let input1 = [1, 3, 4, 5];
console.log(array25(input1));
