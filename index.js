// Code your solutions in this file
function writeCards (name, greeting){
    let message =[];
    for (let i=0; i<name.length; i++){
        message[i] = `Thank you, ${name[i]}, for the wonderful ${greeting} gift!`;
    }
    return message;
}

function countDown(number){
    while (number>=0) {
        console.log(number);
        number--;
    }
}