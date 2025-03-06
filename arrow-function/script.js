// que-1:
/**
 * arrow function is a function which doesn't have a function name and function keyword
 * syntax:
 * var refvar = () => {
 *                      //statements
 *                      //return keyword
 *                      }
 */

// que-2:
var add = (a,b)=>{
    return a+b;
}
console.log(add(2,3));

// que-3:
var square = n => n*n;
console.log(square(7));

// que-4:
// var fn = parameter => {statemets}
// when there is only one parameter we can omit the paranthesis

// que-5:
// v-1:
var cube = n => n*n*n;
console.log(cube(6));

// v-2:
var cube = n => {
    return n*n*n;
}
console.log(cube(9));

// que-6:
var diff = (a,b)=>{
    return b-a;
}
console.log(diff(9,8));
// if there are more than 1 parameter in the function it is mandatory to put () around the parameters...


// que-7:
var msg = () => "Hello,world!";
console.log(msg());


var x = () => y()
var y = () => "javascript"
console.log(x());