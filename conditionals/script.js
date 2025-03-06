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

// Student Exam Result   
// - A student’s grade is based on their marks:  
// -  90+  = A  
// -  80-89  = B  
// -  70-79  = C  
// -  60-69  = D  
// -  Below 60  = Fail  
// - Write a condition to determine the student’s grade.  

marks = 89
if(marks>=90){
    console.log("A");
}
else if(marks>=80 && marks<=90){
    console.log("B");
}
else if(marks>=70 && marks<=79){
    console.log("C");
}
else if(marks>=60 && marks<=69){
    console.log("D");
}
else{
    console.log("Fail");
}

// Movie Ticket Pricing   
// - A movie theater charges:  
// -  Children (below 12 years):  $5  
// -  Adults (12 to 60 years):  $10  
// -  Seniors (above 60 years):  $7  
// - Write a condition to determine the ticket price based on age.  

age = 89
if(age<=12){
    console.log("$5");
}
else if(age>=12 && age<=60){
    console.log("$10");
}
else{
    console.log("$7");
}
