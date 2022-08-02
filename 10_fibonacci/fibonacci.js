const fibonacci = function(n) {

    n = parseInt(n);
    if(!Number.isInteger(n)) return -1;
    if(n < 0) return 'OOPS';

    let phi = 1.618033988749895;

    return Math.floor(

        Math.round((phi**n - (1-phi)**n)/Math.sqrt(5))
    )
};

// Do not edit below this line
module.exports = fibonacci;
