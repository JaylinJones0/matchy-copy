/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'cat';
animal['name'] = 'Rigby';
animal.noises = [];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'meow';
noises.push("hiss");
noises.unshift('mrawr')
noises[noises.length] = 'nya'
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('blub')
console.log(animal)


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Using bracket notation/for in loop/dot notation
 * 2. What are the different ways of accessing elements on arrays?
 * Using bracket notation/for loop
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
}
animals.push(duck);
console.log(animals);
var dog = {
  species: 'dog',
  name: 'Sparky',
  noises: ['bark', 'woof',]
}
animals.push(dog);
var lion = {
  species: 'lion',
  name: 'Princess',
  noises: ['roar', 'meow']
}
animals.push(lion);
console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
an array would be best for a list of friends because you are easily able to
add items, get the count of the contents, sort through, or even remove content
*/

var friends = [];

function getRandom(animals) {
  random = Math.floor(Math.random() * animals.length)
  return animals.indexOf(animals[random])
}
console.log(getRandom(animals));
friends.push(animals[getRandom(animals)].name);
console.log(friends);
animals[getRandom(animals)].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}