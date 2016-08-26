// function add(a, b) {
//   return a + b;
// }

// console.log(add(1,2));

// // variable as an array

// var toAdd = [9, 5];

// //possible to do this:
// console.log(add(toAdd[0], toAdd[1]));

// //Or you can do this with spread:
// console.log(add(...toAdd));
//----------------------------------------------------

// var groupA = ['Briana', 'Joe', 'Kadie', 'Jen'];
// var groupB = ['Cory', 'Susan', 'Marcus'];
// var final = [3, ...groupA, ...groupB];

// console.log(final);

//----------------------------------------------------

var person = ['Tim', 31];
var personTwo = ['Briana', 28];

function greet(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function(name) {
  console.log("Hi, " + name);
});
