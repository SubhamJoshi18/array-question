function array14(nums) {
  let doubleArray = new Array(nums.length * 2).fill(0);
  doubleArray[doubleArray.length - 1] === nums[nums.length - 1];

  return doubleArray;
}

let input1 = [1, 2, 3];
console.log(array14(input1));
