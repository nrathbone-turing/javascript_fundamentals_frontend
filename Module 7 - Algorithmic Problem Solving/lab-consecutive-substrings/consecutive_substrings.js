function consecutiveSubstrings(string) {
    // initialize an empty result array to store the substrings for the output
    const output = [];

    // nested loops
    // outer loop -- iterate over each starting index in the string
    for (let first = 0; first < string.length; first += 1) {

        // inner loop -- iterate over each ending index, starting from `first` + 1
        // this builds substrings that start at `first` and grows +1, one character at a time
        for (let last = first + 1; last <= string.length; last += 1) {
            // extract and store the substring from `first` up to (but not including) `last`
            output.push(string.slice(first, last));
        }
    }
    
    //return array of consecutive substrings the order in which they appear
    return output
}

// my tests below
if (require.main === module) {
  
  // full test for string input = "abc"
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log(""); //adds a blank line between tests

  // single character test
  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));
  
  // test substrings starting from index 0
  const string = consecutiveSubstrings("abc");

  console.log("Expecting substrings starting at index 0: ['a', 'ab', 'abc']");
  console.log("=>", string.slice(0, 3)); 
  // string.slice(0,1) => 'a'
  // string.slice(0,2) => 'ab'
  // string.slice(0,3) => 'abc'

  console.log("");

  // test substrings starting from index 1
  console.log("Expecting substrings starting at index 1: ['b', 'bc']");
  console.log("=>", string.slice(3, 5)); 
  // string.slice(3,4) => 'b'
  // string.slice(4,5) => 'bc'

  console.log("");

  // Test substrings starting from index 2
  console.log("Expecting substrings starting at index 2: ['c']");
  console.log("=>", string.slice(5)); 
  // string.slice(5) => 'c'

  console.log("");

  // edge case test for empty string
  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(""));

  console.log("");
}

// determine the Big O notation for this function's time complexity
// Big O: O(n²) -- because the function complexity scales with the array input length
module.exports = consecutiveSubstrings;