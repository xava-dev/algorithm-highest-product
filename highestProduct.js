// Function that returns the highest product between
// three numbers of a given array of integers

const array = [1, 10, 2, 6, 5, 3];

// Approach 1

// Time Complexity: O(n)
// Space Complexity: O(n)

const calcHighestProductApproach1 = (array) => {
  // Check if array length is less than 3
  if (array.length < 3) {
    return undefined;
  }

  // Assign three variables to the smallest positive
  // numeric value representable in JavaScript
  let first, second, third;
  first = second = third = Number.MIN_VALUE;

  // Loop over the given array with size n
  for (let i = 0; i < array.length; i++) {
    // Find the largest number
    if (array[i] > first) {
      third = second;
      second = first;
      first = array[i];
    }

    // Find second-largest number
    else if (array[i] > second) {
      third = second;
      second = array[i];
    }

    // Find third-largest number
    else if (array[i] > third) third = array[i];
  }

  // Return highest product
  return Math.max(first * second * third);
};

// Save highest product
const highestProductApproach1 = calcHighestProductApproach1(array);

// Log the highest product if defined
highestProductApproach1
  ? console.log("Approach 1: Highest product is " + highestProductApproach1)
  : console.log("Approach 1: Array consists of less than three numbers");



// Approach 2

// Time Complexity: O(n log(n))
// Space Complexity: O(n)

const calcHighestProductApproach2 = (array) => {
  // Check if array length is less than 3
  if (array.length < 3) {
    return undefined;
  }

  // Return highest product
  return [...array]
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, b) => a * b, 1);
};

// Save highest product
const highestProductApproach2 = calcHighestProductApproach2(array);

// Log the highest product if defined
highestProductApproach2
  ? console.log("Approach 2: Highest product is " + highestProductApproach2)
  : console.log("Approach 2: Array consists of less than three numbers");
