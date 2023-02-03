// write a program to check if two strings are a rotation of each other?/

function isRotation(str1, str2) {
    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) {
      return false;
    }
    
    // Concatenate str1 with itself to create a new string
    let concatenatedString = str1 + str1;
    
    // Check if str2 is a substring of the concatenated string
    return concatenatedString.includes(str2);
  }
  
  // Example usage
  console.log(isRotation("hello", "llohe")); // Output: true
  console.log(isRotation("hello", "helol")); // Output: false
  