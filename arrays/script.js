// Create an Array
//  Create an array with five numbers and print it.

var arr = [1,2,3,4,5]
console.log(arr);

// Given an array, print the third element.
console.log(arr[2]);

// Modify the second element of an array to a new value.
arr[1] = "new"
console.log(arr);

// Write a function that returns the length of an array.
function findLength(arr){
    return arr.length
}

console.log(findLength(arr));

//  Add a new element to the end of an array

arr.push(6)
console.log(arr);

// Remove the last element from an array and print the updated array
arr.pop()
console.log(arr);

//  Use a loop to print each element of an array
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// Write a function to check if a given value exists in an array.

console.log(arr.includes(1));

// Create a copy of an array and print it
new_arr = arr
console.log(new_arr);

