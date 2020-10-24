// Written by Jacky Tong (2020)
console.log("Hello World (Line 2)");
// Create Q&A bank (maybe I can do it in an object)
var qaObject = {
    question1: "What are the primary colors according to a printed edition manufacturer?", 
    answerW: "CMYK", 
    answerX: "Red, Yellow, Blue", 
    answerY: "Orange, Green, Purple", 
    answerZ: "Red, Green, Blue"
};
// multiple arrays, one per question? 
// Takes up way too much memory and it would be easier to just call question text+answer on click events.
var qBank = [];
var aBank = [];
console.log("Line 15 works after declaring Q/A objects/vars");
// Each answer bank should be randomized with one button having the "correct" or true value to proceed to next question.

// Start Button
var start = document.getElementById("start");
start.setAttribute("text", "Start Quiz!");

// Initiate Quiz environment
// A Paragraph element (Perhaps Header 2 or 3?) for the Question display
// and then push the Question Text from a bank

// Then a Paragraph Element for the answers, containing multiple choice buttons with values assigned.
// as well as corresponding answer text for each button.
$ ("start").on("click", function() {
    console.log("It's working so far");
    var question = document.createElement("p").setAttribute("id", "answer");
    var answer = document.createElement("p");
    console.log("It's working so far");
    $ ("answer").text("It's pushed this to screen hopefully");
});


