// var sentence = 2;
// console.log(sentence);
//
// // var firstNumber = 22; // decleration and definition
// // var secondNumber = 11;
//
// let thirdNumber = 31;
// console.log(thirdNumber);
//
//
// const truth = "string theory";
//
// console.log(truth);
//
// let rightNow = new Date();
// console.log(rightNow);
//
//
//
// var array = [1,2,3];
// console.log(array);
//
//
// /// objects
// var myObject = {
//   myString: "Objects example"
// };
//
// console.log(myObject);
//
//
// let helloMessage = alert("Hey, there! my book is only $9.99....") ;
//
// let confirmMessage = confirm("Is your name Jesus");
// console.log(confirmMessage);
//
//
// let promptMessage = prompt("Tell me the password", "password");
// console.log(promptMessage);

// let firstName = prompt("What is your first name?");
// console.log(firstName);
//
// let lastName = prompt("What is your last name?");
// alert(lastName);
//
// let birthday = prompt("What is your birthday?", "1/1/1900");
// confirm(new Date(birthday));
//
// This is my gh-Pages branch
// const bestNumber = 42;
//
// console.log(!bestNumber);

// var string = "1";
// var number = 1;
// console.log(string == number);

// var primitave = "Hello World";
// var stringObject = new String("Hello World");
// console.log(primitave === stringObject);
// console.log(typeof(primitave));
// console.log(typeof(stringObject));

// let number = prompt("Whats your favorite number?", "10");
// let number2 = prompt("Second number", "10");
// if isNan(number){
// return nan
// }

//STRING INTORPLORATION

// switch(favColor.toLowercase()) {
//   case 'blue':
//
//   //ES5- String interpolation
//   alert("Hey there, " + firstName + " it looks like you love " + favColor + "and your last name is " + lastName + ".");
//
//   //ES6 Sring interpolation
//   alert(`Hey there, ${firstName} it looks like you love ${facColor} and your last name is ${lastName}.`);
//
// }
//
// var arr = [1,2,3,4,5];
//
// if(arr.indexOf(6) !== -1) {
//
// }
//
// var favoriteMovie = ['Star Wars VI', '1983'];
// var secondFavorite = ['Return of the King', '2003'];
// var thirdFavorite = ['Equilibrium', '2002'];
// var myFavoriteMovies = [];
// myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);
// //Result:
// [['Star Wars VI', '1983'], ['Return of the King', '2003'], ['Equilibrium', '2002']];
//
// var movieOne = ["Star Wars", 'Mark Hamil'];
// var movieTwo = ['Good Will hunting', "Matt Dameon"];
// var movieThree = ['Mr. Nobody', 'Jared Letto'];
// var movieFour = ['Accross the Universe', 'jim sturgess'];
// var movieFive = ['Preadator', 'Arnoald Schwartzeneger'];
//
// var favoriteMovie = [];
//
// favoriteMovie = favoriteMovie.push(movieOne, movieTwo,  movieThree, movieFour, movieFive);
// console.log(favoriteMovie);
//
// //Step 3
// var favAndLeastFav = [];
// favAndLeastFav.push(movieOne[0], movieTwo[1], movieThree[2]);
//
// //step 4 check length of fav with alert
// alert(favAndLeastFav);
//
//
// /// LOOPS
//
// //let i = 0
//
// while (i < myFavoriteMovies.length) {
//   console.log(myFavoriteMovies[i]);
//   i++;
// }
//
//
// for(var incrementor = 0; incrementor < myFavoriteMovies.length; incrementor++) {
//   if(myFavoriteMovies[i][0] === "Star Wars") {
//     alert(`${myFavoriteMovies[i][0]} is my favorite movie with ${myFavoriteMovies[i][1]}.`);
//   }
//   console.log(myFavoriteMovies[i]);
// }
//
// //DO WHILE LOOPS
// var i = 0
//
// do {
//   console.log(myFavoriteMovies[i]);
//   i++;
// } while(i < myFavoriteMovies.length);

//DAY 5!!!!!!!!!!!!!!!

// var myfunc = function(){
//   console.log('you fired your anonymous function');
// };
//
// myfunc();

// var todos = [];
// var todoOne = prompt("What do you have going on this weekend?");
// var todoTwo = prompt("what else is going on?");
// var todoThree = prompt("Whats the last thing you want to do this weekend?");
//
// todos.push(todoOne, todoTwo,todoThree);
//
// var todowithDays = [];
// for(let i = 0, i < todos.length; i++) {
//   var due = prompt(`What do you want to get done ${todos[i]} done ?`, `please use this formant: day/month/year`);
//   due = new Date(due);
//   todowithDays.push([todos[i], due])
// }
//
// //Step 3
// var sortedWithIndicies = [];
// let j = 0
// var now = new Date().getTime(); /// gives you the calculated time in miliseconds
//
// while(j < todowithDays.length) {
//   let onedDay = 24 * 60 * 1000; //hours*min*seconds**miliseconds
//   var diffDays = Math.round([todowithDays[j][1]);
// }
//
// sortedWithIndicies.sort();
//
// console.log(sortedWithIndicies[sortedWithIndicies.length - 1], ` Will take the longest`);[]
//
// //step 4
//
// let n = 0
//
// do {
//   if(n != sortedWithIndicies.length - 1 ) {
//     sortedWithIndicies[n][1].push("done");
//   }
//   n++
// } while(n < sortedWithIndicies.length);
//
// let alertArr = [];
// for(let i = 0, i < sortedWithIndicies.length; i++) {
//   console.log(sortedWithIndicies[i][1].indexOf(`done`)) !== -1) {
//     alertArr.push(sortedWithIndicies[i][1]);
//   }
// }

// //DOG AGE,

// const dogAge = prompt("How old is dat doe?", 3);
// // Rykers version
//
// function calcDogYears(age) {
//   parseInt(age);
//   if(isNan(age)) {
//     //if the user gives me a non number... do something here..
//     calcDogYears(prompt("Nah, for real.... NUMBER", '10'));
//   } else {
//     age *= 7;
//   }
// }
//My Version
// function dogYears(age) {
//   parseInt(age);
//   if(age >= 0) {
//   alert(age * 7);
//  } else {
//   return
//  }
// };
//console.log(dogYears(3))

// function howMuchYouUse(age, usage) {
//   parseInt(age);
//   if(age <= 80) {
//     let yearsLeft = 80 - age;
//     let use = yearsLeft * usage
//     return alert(use)
//
//   };
// }
//
// howMuchYouUse(2, 12)
//
// var number =  prompt("Whats number do you want to square?");
//
// function sqared(n){
//   if(!isNan(parseInt(n))) {
//     console.log(Math.pow(n, 2));
//     return Math.pow(n,2);
//   } else {
//     alert(Nan);
//     var newNumber = prompt(`Give me a different number`);
//     square(newNumber);
//   }
// }
//
// square(number);
//
// function flipString(a) {
//   var index = Math.round(a.length / 2); // represents the middle of the string
//   return a.substring(index) + a.slice(0, index );  //Substring finds the index of a stirng.. thats why we made var index
// }
//
// var report = flipString(stringy);
// consolelog(report);
//
// function isPalidrome(s) {
//   var reversed = s.split("").reverse().join('');
//   if(s === refersed) {
//     return true;
//   } else {
//     return false;
//   }
// }

//querying the DOM practice
//mostly for user interactions or debugging
//this specifies that we wanted to find a h1 tag element.. returns an array of all items w/ specific tag
// var h1 = document.getElementsByTagName('h1');
// console.log('h1: ', h1);
//
// //most styling can be done with classes, so this is good
// var divClass = document.getElementsByClassName('div');
// console.log(divClass);
//
// //querySelector practice: querySelectors allow you to do things without the confines of traditional DOM queries (yay ES5)
// //querySelector only gets the FIRST instance of this class, Id, whatever.. they're cool because you're not compelled to type out the full "getElementsbyId", etc
// //period or hashtag respectively make it a class or an Id
// var pDiv = document.querySelector('#c'); //the p signifies the class
// console.log(pDiv);
//
// //grabbing elements by Id. you should stop using Ids for CSS and use them for JS because.. that's not cool
// var id document.getElementbyId('div');
// console.log("id : " + id);
//
// //this grabs all instances, not just the first as querySelector does
// //you would then use a separate function to loop through all
// var iv = document.querySelectorAll('div');
// // console.log(iv);
// var userQueryType = prompt("Which type do you want to use?", "Please use eiter 'tag', 'class', 'id', 'selector', 'selectorAll'");
//
// function queryDom(queryType, tagToQuery) {
// tagToQuery = 'body';
// switch(queryType) {
//   case 'tag' : console.log(document.getElementsByTagName(tagToQuery));
//   break;
//   case 'class' : ////
//   console.log(document.getElementsByClassName('bodyTag'));
//   break;
//   case 'selector' :
//   console.log(document.querySelector('body'));
// }
// }
//
// var h1 = document.getElementsByTagName('h1');
// h1.addEventListener('click', function(event) {
//   console.log("event: ", event);
//
// });
//
// // in javascript functions are first class. they can all be passed into eachother and other funciotns
// var myKey = document.querySelector('keydown', function(e) {
//   console.log(e);
// })

// var div1= document.querySelector('div');
// //this eventListener is "listening" or "waiting" for the human interaction to trigger the event.
// //for mouseenter, your mouse has to enter the area to generate the expected output mentioned below
//
// div1.addEventListener('mouseeenter', function(){
//   div1.style.backgroundColor = "yellow"; //we do everything the same as in CSS, but we camelCase it
//   alert('mouse over is working');
// //expected output: bg color turns yellow when mouse enters this section
//
// div1.addEventListener('mouseleave', function() {
//     div1.style.backgroundColor = 'white';
// //expected output: bg color returns to white
//   });
// });

var h3s = document.getElementById('h3Value');


h3s.addEventListener('click', function() {
  h3s.onClick = convertToC();
}
)

function convertToC() {
  var promptMessage = prompt("Please enter a number", "0")
  var fTempVal = parseInt(promptMessage)
  var cTempVal = (fTempVal - 32) * (5 / 9);
  document.getElementById('h3Value').innerText = `${cTempVal} Celcius`;
  return false;
}
