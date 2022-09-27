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

// Time Complexity: O(n + k)
// Space Complexity: O(k)

const calcHighestProductApproach2 = (array, n = array.length) => {
  // Check if array length is less than 3
  if (n < 3) {
    return undefined;
  }

  // Calc maximum element
  let k = Math.max(...array);
  let t;

  // Create a temporary with 0 zero value
  // as the same length of max element + 1
  const temp = new Array(k + 1).fill(0);

  // Count the frequency of each element in the original array
  // And store it in temporary array
  for(let i = 0; i < n; i++){
    t = array[i];
    temp[t]++;
  }

  // Update the count based on the previous index
  for(let i = 1; i <= k; i++){
    // Updating elements of count array
    temp[i] = temp[i] + temp[i - 1];
  }

  //Output arr
  const outputArray = new Array(n).fill(0);

  for(let i = n - 1; i >= 0; i--) {
    // Add elements of array A to array B
    t = array[i];
    outputArray[temp[t] - 1] = t;

    // Decrement the count value by 1
    temp[t] = temp[t] - 1;
  }

  return outputArray
      .slice(-3)
      .reduce((a, b) => a * b, 1);
};

// Save highest product
const highestProductApproach2 = calcHighestProductApproach2(array);

// Log the highest product if defined
highestProductApproach2
  ? console.log("Approach 2: Highest product is " + highestProductApproach2)
  : console.log("Approach 2: Array consists of less than three numbers");
