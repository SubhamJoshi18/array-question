function array21(nums) {
  const [first, second, third, last] = nums;
  if (nums.length === 4) {
    return [last, second, third, first];
  } else if (nums.length === 3) {
    return [third, second, first];
  } else {
    return [];
  }
}

let input1 = [1, 2, 3];
console.log(array21(input1));
