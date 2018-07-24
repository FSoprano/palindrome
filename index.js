
// Listing 77: Exporting a module.
// ~/repos/palindrome/index.js

module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
  // A statement that will fail testing:
  // return Array.from(this).reverse()
  
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
	
  // A statement that will fail testing:
  // this.content = this.processedContent;
  
    // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
	 
	return this.letters().toLowerCase();
	  
	// A statement that will fail testing:
    // return this.content
	
  }
  // Returns the letters in the content:
  this.letters = function letters() {
    // return this.content;   stubbing not yet completed functions
	// is also a good way to get more explicit test messages.
	
	let theLetters = [];
    for (let i = 0; i < this.content.length; i++) {
      if (this.content.charAt(i).match(/[a-zA-Z]/)) {
        theLetters.push(this.content.charAt(i));
      }
    }
    return theLetters.join("");
  }


  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

