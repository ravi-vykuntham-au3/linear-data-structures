// write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairsWithGivenSum(arr, sum) {
    // Initialize an array to store the pairs of elements
    let pairs = [];
  
    // Create a hash map to store the elements as key-value pairs
    let hashMap = new Map();
  
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element's complement (sum - arr[i]) exists in the hash map
      if (hashMap.has(sum - arr[i])) {
        // If it does, add the current element and its complement as a pair to the pairs array
        pairs.push([arr[i], sum - arr[i]]);
      }
      // Add the current element to the hash map
      hashMap.set(arr[i], i);
    }
  
    // Return the array of pairs
    return pairs;
  }
  
// Example usage
let result = findPairsWithGivenSum([1,2,3,4,5,6,7,8], 8)
console.log(result)
