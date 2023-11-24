function hasTargetSum(array, target) {
  let seenNumbers = new Set();
  for(let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    let difference = target - currentElement
    
    
    if(seenNumbers.has(difference)){
      return true 
    }
  
    seenNumbers.add(currentElement)
  }
  return false
}



/*
finds if two numbers in an array equal to the sum
*/

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  for number in array:
    difference = target - number
    if(difference in array):
      return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
