function findPairsWithGivenSum(arr, sum) {
    let pairs = [];
    let hashMap = new Map();
  
    for (let i = 0; i < arr.length; i++) {
      if (hashMap.has(sum - arr[i])) {
        pairs.push([arr[i], sum - arr[i]]);
      }
      hashMap.set(arr[i], i);
    }
  
    return pairs;
  }
  
let result = findPairsWithGivenSum([1,2,3,4,5,6,7,8], 8)
console.log(result)