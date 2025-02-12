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