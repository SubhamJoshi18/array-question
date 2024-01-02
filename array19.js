function middleTwo(nums) {
  // Calculate the index of the middle elements
  const middleIndex1 = nums.length / 2 - 1;
  const middleIndex2 = nums.length / 2;

  // Return a new array containing the middle two elements
  return [nums[middleIndex1], nums[middleIndex2]];
}

// Example usage:
let myArray = [1, 2, 3, 4];
let resultArray = middleTwo(myArray);
console.log(resultArray);
