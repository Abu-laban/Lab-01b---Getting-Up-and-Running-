"use strict";

let username = prompt('Please enter your name');
console.log('The username : ',username);
alert("Welcome " + username);

let Q1 = prompt('What are your favorite TV shows?');
console.log('The favorite TV shows : ',Q1);
alert(Q1 + " it's a nice  TV show to be watched");

let Q2 = prompt('What is your favorite color?');
console.log('The favorite color : ',Q2);
alert(`Your ${Q2} color is common for other people`);

let Q3 = prompt('What is your favorite animal?');
console.log('The favorite animal : ',Q3);
alert(`The ${Q3} is a good pet to get`);

let Q4 = prompt('Where is the most interesting place you’ve been?');
console.log('The most interesting place : ',Q4);
alert(`Greetings ${username} , I also like to watch ${Q1} with ${Q3} and prefer to be his color ${Q2} while i'm on vacation in ${Q4}.`);