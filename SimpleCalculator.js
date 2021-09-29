var total;
console.log("Welocome to the Simple Calculator");
function done() {
    console.log("Thanks for calculating");
    readline.close();
}
function calculate (operator, userNum){
    console.log(`You input ${userNum}`);
    if(operator == "+"){
        total += userNum;
         console.log(`Current Total: ${total}`);
         Operation();
    }
    else if(operator == "-"){
        total -= userNum;
        console.log(`Current Total: ${total}`);
         Operation();
    }
    else if(operator == "*"){
        total *= userNum;
        console.log(`Current Total: ${total}`);
         Operation();
    }
    else if(operator == "/"){
        total /= userNum;
        console.log(`Current Total: ${total}`);
         Operation();
    }
    else if (operator == "q"){
        done();
    }
    else{
        console.log("Please enter a valid operation or q to exit");
        Operation();
    }
}
    function userNumber (operator){
    if(operator == "q"){
        done();
    }
    else{
        readline.question(`Enter a number to ${operator}`, userNum => {calculate(operator,userNum )})
    }
}

const readline = require('readline').createInterface( { 
	input: process.stdin,
	output: process.stdout
});
function Operation(){
    readline.question('Enter an Operator: ', operator => {userNumber(operator)});
}
Operation();
