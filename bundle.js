(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("stoics-palindrome");

function palindromeTester(event) {
	event.preventDefault();

	let phrase = new Phrase(event.target.phrase.value);
	let palindromeResult = document.querySelector("#palindromeResult");

	if (phrase.palindrome()) {
		palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
	} else {
		palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
	}
}

document.addEventListener("DOMContentLoaded", function() {
	let tester = document.querySelector("#palindromeTester");
	tester.addEventListener("submit", function(event) {
		palindromeTester(event);
	});
});
},{"stoics-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Add 'reverse' to all strings.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;
	
	this.processor = function(string) {
		return string.toLowerCase();
	}
	
	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}
	
	// Returns the letters in the content.
	// For example:
	//    new Phrase("Hello, world!").letters() === "Helloworld"
	this.letters = function letters() {
		return (this.content.match(/[a-z]/gi) || []).join("");
	}
	
	// Returns true if the phrase is a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		if (this.processedContent()) {
			return this.processedContent() === this.processedContent().reverse();
		} else {
			return false;
		}
	}
	
	// Makes the phrase LOUDER.
	this.louder = function() {
		return this.content.toUpperCase();
	}
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;
	
	// Returns translation processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.processor(this.translation); // overrides processedContent from Phrase
	}
}

// An instance of TranslatedPhrase inheriting Phrase methods
TranslatedPhrase.prototype = new Phrase();

},{}]},{},[1]);
