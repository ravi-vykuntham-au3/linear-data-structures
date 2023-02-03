// write a program to reverse an array in place? in place means you cannot create a new array. you have to update the original array.

function reverseArrayInPlace(arr) {
    // initialize the left and right pointers
    let left = 0;
    let right = arr.length - 1;
  
    // keep swapping the elements until the pointers meet in the middle
    while (left < right) {
      // store the current element at the left pointer in a temporary variable
      let temp = arr[left];
  
      // swap the current element at the left pointer with the element at the right pointer
      arr[left] = arr[right];
      arr[right] = temp;
  
      // move both pointers towards the middle
      left++;
      right--;
    }
  
    // return the reversed array
    return arr;
  }
  
  // Example usage
  let result = reverseArrayInPlace([9,8,7,6,5,4,3,2,1,0])
  console.log(result)