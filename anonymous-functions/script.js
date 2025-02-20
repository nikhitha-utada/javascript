// problem-1

function processNumbers(num1,num2,anonymous){
    var res = anonymous(3,4)
    console.log("Sum: ",res)
}
 
processNumbers(3,4,function sum(num1,num2){
    return num1+num2;
})

// task-2:
function greet(anonymous){
   var res =  anonymous("Alice")
   console.log(res);
}

greet(function (name){
    return "Hello "+name+"!"
})

// task-3:
function calculate(anonymous){
    var res=anonymous(5,6)
    console.log("Difference:",res);
}

calculate(function (num1,num2){
    return num2-num1
})