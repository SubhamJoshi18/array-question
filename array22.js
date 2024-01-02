function middleThree(nums) {
  // Calculate the index of the middle element
  const middleIndex = Math.floor(nums.length / 2);

  // Return a new array containing the three elements from the middle
  return [nums[middleIndex - 1], nums[middleIndex], nums[middleIndex + 1]];
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
let resultArray = middleThree(myArray);
console.log(resultArray);
