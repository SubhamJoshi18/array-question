const alphabet = [1, 2, 3, 4, 5, 6];
const number = ["a", "b", "c", "d", "e"];

const [first, , second, ...rest] = alphabet;
console.log(first);
console.log(second);
console.log(rest.join(","));

function sumandMultiply(a, b) {
  return [(a = b), a * b];
}

const [sum, multiply] = sumandMultiply(2, 3);
console.log(sum);
console.log(multiply);

const person1 = {
  name: "subham",
  age: 19,
  hasHobbies: true,
  gender: "male",
};

const { name, age, gender = "Female", hasHobbies } = person1;
console.log(name);
console.log(age);
