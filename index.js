function isPalindrome(word) {
  // Write your algorithm here
  for (let x=0; x < (word.length/2); x++){
    if (word.charAt(x) !== word.charAt(word.length - (x+1)))
      {return false}
  }
  return true;
}

/* 
  Add your pseudocode here
  returns true if the string is the same backwards and forwards

  get length of string (length = string.length)
    for (x= 0; x < length/2; x++)
    --> is charAt(x) === to charAt(length -(x+1))
*/

/*
  Add written explanation of your solution here:
  The for loop that iterates through string comparing 1st character to last
  character, 2nd character to second to last... etc, returning true if the
  characters are the same until the middle character is reached
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("abca"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
