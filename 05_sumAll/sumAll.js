const sumAll = function(a, b) {

    if(typeof a !== 'number' || typeof b !== 'number') return 'ERROR';

    else if (a < 0 || b < 0) return 'ERROR';

    if(a===0) a=1;
    if(b===0) b=1;

    else {

        if(a <= b) {

            return gaussCount(b) - gaussCount(a - 1)
        }

        else {return gaussCount(a) - gaussCount(b - 1)}
    }
};

const gaussCount = function(n) {return (n*(n+1))/2}

// Do not edit below this line
module.exports = sumAll;
