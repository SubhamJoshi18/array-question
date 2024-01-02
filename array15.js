function array15(nums) {
  if (nums.length <= 2) {
    if (nums.indexOf(0) === nums.indexOf(1)) {
      return true;
    } else {
      return false;
    }
  }
}

let input1 = [2, 2];
console.log(array15(input1));
