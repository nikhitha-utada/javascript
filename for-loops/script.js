// Scenario 1: Counting Numbers
// Write a for loop to print numbers from 1 to 10

for(var i=1;i<=10;i++){
    console.log(i);
}


// Scenario 2: Sum of Numbers
// Write a for loop to calculate the sum of all numbers from 1 to 100.
var sum = 0;
for(var i=1;i<=100;i++){
    sum+=i;
}
console.log(`sum of 1 to 100 numbers is ${sum}`);

// Scenario 3: Multiplication Table
// Write a for loop to print the multiplication table of 7 (up to 10).

for(var i=1;i<=10;i++)
{
    console.log(`7 x ${i} = ${7*i}`);
}

// Scenario 4: Even Numbers
// Write a for loop to print all even numbers between 1 and 20.

for(var i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}

// Scenario 5: Factorial Calculation
// Write a for loop to calculate the factorial of a number (e.g., 5!).
fact=1
for(var i=1;i<=5;i++)
{
    fact*=i
}
console.log(fact);

// Scenario 6: Power of a Number
// Write a for loop to calculate the power of a number (e.g., 2^5).
res=1
for(var i=1;i<=5;i++){
    res *= 2;
}
console.log(res);