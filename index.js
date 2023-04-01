function isPalindrome(word) {
  // Write your algorithm here
  //TODO :implement string reversing functionality
  return word;
}
function isPalindrome(word) {
    // reverse the input string
    const reverseWord = reverseString(word);
    // if the reversed string is the same as the input
    
    if (word === reverseWord) {
        return true
     } else {
        return false
  }
}

/* 
  Add your pseudocode here
*/
function reverseString(word) {
//reverse the input string
const wordArray = word.split("");
//reverse the array
const reverseWordArray = wordArray.reverse();
//create a string of reversed array
const reverseWord = reverseWordArray.join("");
//return reversed array
return reverseWord;
}
//if the reversed string is the same as the input
//  return true
//else
//  return false

/*
  Add written explanation of your solution here
*/
//create an array from the input string
//reverse the array
//create a string from the reversed array
//return the reversed string



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
