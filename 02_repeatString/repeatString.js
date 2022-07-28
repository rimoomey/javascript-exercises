const repeatString = function(input, numRepetitions) {

    if(numRepetitions < 0) return 'ERROR';

    let outputString = '';
    for(let i = 0; i < numRepetitions; i++) {

        outputString = outputString.concat(input);
    }

    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
