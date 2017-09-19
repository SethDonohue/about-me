'use sctrict';
// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
// Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
// Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
// Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.

var userName = prompt('What is your name?');
alert('Hi, ' + userName + ' nice to meet you. See if you can get the right answers to the following questions about me.');

  //Question 1
  var answer1 = prompt('Do I have 2 cars?').toLowerCase();
  console.log('Answer1: ' + answer1);

  if (answer1 === 'n' || answer1 === 'no') {
    //Tell the user they are correct.
    alert('You\'re right!');
  } else {
    //Tell the user they are incorrect.
    alert('You\'re incorrect, sorry!');
  }

  //Question 2
  var answer2 = prompt('Do I like road trips?').toLowerCase();
  console.log('Answer2: ' + answer2);

  if (answer2 === 'y' || answer2 === 'yes') {
    //Tell the user they are correct.
    alert('You\'re right!');
  } else {
    //Tell the user they are incorrect.
    alert('Doh! You\'re incorrect, sorry!');
  }

  //Question 3
  var answer3 = prompt('Do I live in Seattle?').toLowerCase();
  console.log('Answer3: ' + answer3);

  if (answer3 === 'y' || answer3 === 'yes') {
    //Tell the user they are correct.
    alert('You\'re right! That was an easy one... good luck with the next question.');
  } else {
    //Tell the user they are incorrect.
    alert('Doh! You\'re wrong! Come on, that was an easy one!');
  }
 //Question 4
  var answer4 = prompt('Do I like working with electronics, welding, blacksmithing, or just creative hobbies in general?').toLowerCase();
  console.log('Answer4: ' + answer4);

  if (answer4 === 'y' || answer4 === 'yes') {
    //Tell the user they are correct.
    alert('You\'re right! That was actually an easy one.');
  } else {
    //Tell the user they are incorrect.
    alert('Doh! You\'re wrong! Come on, that was an easy one too!');
  }
