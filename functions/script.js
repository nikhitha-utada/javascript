// task - 1:
function sayHello(){
    console.log("Hello, World!");
}
sayHello();

// task-2:
function displayWarning(){
    console.log("Warning! System Overload");
}
displayWarning();

// task-3:
function printStatus(){
    console.log("System Status: Active");
}
printStatus();

// task-4:

function initialize(){
    console.log("Initialization Complete.");
     shutDown();
}
function shutDown(){
    console.log("System Shutting Down...");
}
initialize();

// task-5:
function startProcess(){
    console.log("Process Started.");
    endProcess();
}
function endProcess(){
    console.log("Process Ended.");
}
startProcess();

// task-6:
function greetUser(name){
    console.log(`Hello ${name}!`);
}
greetUser("Nikhitha");
greetUser("Vamshi")

// task-7:
function sum(num1,num2){
    console.log(num1+num2);
}
sum(2,3)
sum(7,8)

// task-8:
function countDown(){
    for(var i=5;i>0;i--)
    {
        console.log(i);
    }
}
countDown();


