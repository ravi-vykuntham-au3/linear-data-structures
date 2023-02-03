//write a program to print the first non-repeated character from a string

function firstNonRepeatedCharacter(str) {
    // Create an object to store the frequency of each character
    let charFrequency = {};
    
    // Loop through the string and add the frequency of each character to the charFrequency object
    for (let i = 0; i < str.length; i++) {
      charFrequency[str[i]] = charFrequency[str[i]] + 1 || 1;
    }
    
    // Loop through the string again
    for (let i = 0; i < str.length; i++) {
      // If the frequency of the current character is 1, return it as it is the first non-repeated character
      if (charFrequency[str[i]] === 1) {
        return str[i];
      }
    }
    
    // If no non-repeated character was found, return null
    return null;
  }
  
  // Example usage
  console.log(firstNonRepeatedCharacter("abacabad")); // Output: 'c'
  