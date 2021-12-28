// Code your solutions in this file
const message = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}

function countDown() {
    let countDown = 11;
    while (countDown > 0) {
        countDown--;
        console.log(countDown);
    }
}