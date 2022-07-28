const reverseString = function(word) {

    let splitString = word.split("");

    splitString = splitString.reverse();

    let reversed = '';

    for(const char of splitString) {

        reversed = reversed.concat(char);
        console.log(reversed);
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
