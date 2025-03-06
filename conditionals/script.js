//A bus company offers a discount for students under 18 and senior citizens above 60. Write a condition to determine if a person gets a discount based on their age.  

var age = 45
if(age<18 || age>60){
    console.log("Congratulations you got discount");
}
else{
    console.log("Sorry you have no discount");
}

// An online store offers  free shipping  if the total purchase amount is  $50 or more . Write a condition to check if the user qualifies for free shipping.  

purchase_amt = 45
if(purchase_amt>=50){
    console.log("Your shipping is free");
}
else{
    console.log("Shipping cost available");
}

// Library Late Fee Calculation   
// - A library charges a fine based on how late a book is returned:  
// -  1–5 days:  $1 per day  
// -  6–10 days:  $2 per day  
// -  More than 10 days:  $5 per day  
// -  Returned on time:  No fine  
// - Write a condition to determine the fine amount.  

days = 10
if(days==0){
    console.log("No fine");
}
else if(days>=1 && days<=5){
    console.log("$1 per day");
}
else if(days>=6 && days<=10){
    console.log("$2 per day");
}
else{
    console.log("$5 per day");
}

// A smart traffic system should display the correct signal based on the traffic light color (Red = "Stop", Yellow = "Slow Down", Green = "Go"). Write a condition to determine the action.  

var colour = "red"
if(colour=="red"){
    console.log("Stop");
}
else if(colour=="orange"){
    console.log("slow down");
}
else if(colour=="green"){
    console.log("go");
}
else{
    console.log("invalid");
}