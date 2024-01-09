function isPalindrome(word) {
  // Write your algorithm here
  const length = word.length;
  for (let x=0; x < (length/2); x++){
    if (word.charAt(x) === word.charAt(length - (x+1))){
      return true;
    }
    else {return false}
  }
}

/* 
  Add your pseudocode here
  returns true if the string is the same backwards and forwards

  get length of string (length = string.length())
    for (x= 0; x < length/2; x++)
    --> is charAt(x) === to charAt(length -(x+1))
  
  else (for example tacocat)

    is charAt(0) === charAt(length - 1)?
    --> is charAt(1) === charAt (length -2)
    --> 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
