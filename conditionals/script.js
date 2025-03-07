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

// A system checks a username and password. If both match, it logs the user in. If either is incorrect, it shows an error message. Write a condition for this scenario.  
var username = "nikhitha"
var password = "123456"
if(username=="nikhitha" && password=="123456"){
    console.log("Login successful");
}
else{
    console.log("Invalid credentials");
}

// .  Weather-Based Outfit Suggestion   
// - A weather app suggests clothing based on temperature:  
// -  Below 10°C:  "Wear a heavy jacket"  
// -  10°C to 20°C:  "Wear a light jacket"  
// -  Above 20°C:  "Wear a t-shirt"  
// - Write a condition to display the correct suggestion.  

temp = 89
if(temp<=10){
    console.log("wear a heavy jacket");
}
else if(temp>=10 && temp<=20){
    console.log("wear a light jacket");
}
else{
    console.log("wear a tshirt");
}

// Restaurant Order Discount   
// - A restaurant offers:  
// -  10% discount for orders above $100   
// -  5% discount for orders between $50-$100   
// -  No discount for orders below $50   
// - Write a condition to calculate the final bill.  

bill = 100
if(bill>100){
    console.log(bill - (bill/10));
}
else if(bill>=50 && bill<=100){
    console.log(bill - (bill/20));
}
else{
    console.log(bill);
}

// Online Exam Eligibility   
// - A student can attempt an online exam  only if :  
// - They have  registered   
// - They have  paid the fee   
// - Write a condition to check if the student can take the exam.  

registered = false
paid = true
if(registered && paid){
    console.log("You can take the exam");
}
else{
    console.log("Sorry you cant take the exam");
}

