function writeCards(names) {
    let result = [];
    for (let i = 0; i < names.length; i++) {
        result.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return result;
}

function countdown(number) {
    for (let i = 0; i <= number; i++) {
        console.log(number - i);
    }
}


