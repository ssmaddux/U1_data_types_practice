/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */
let myFavoriteSong = "The Martian"
// console.log(`MY favorite song is ${myFavoriteSong}`)

/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var, then console.log each of them
 */
let sage = 1
const sage1 = 2
var sage2 = 3
//console.log(sage, sage1, sage2)

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */
let num = 100
num = num + 1
num = num - 1
num = num * 3
num = num / 7
num = num % 2
//console.log(num)



/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */
let firstN = "Sage"
let lastN = "Maddux"
fullName = firstN + " " + lastN
//console.log(`Hello my name is ${fullName}`)


/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array
let arr = ["Movie0", "Movie1", "Movie2"]
arr.unshift("newMovie0")
arr.push("newMovie2")
arr.splice(2,0, "newMovie2")
//console.log(arr)

/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

array1[2]
array2[1][1]
array3[1][1][1][0]
//add console.log to print out.

/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];
array4[3]


/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

thom.splice(0,1, "Tom")
//console.log(thom)

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

karolin.splice(1,1,17)
//console.log(karolin)

// Change Cathleen's hometown from New York to "Gotham City".

cathleen.splice(2,1,"Gotham City")
//console.log(cathleen)

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
kristyn.splice(2,1,"Oakland")
//console.log(kristyn)
