const removeFromArray = function(arr) {

    const to_array = Array.from(arguments);

    const args = Array.from(to_array.slice(1));

    for(let j = 0; j < args.length; j++) {

        index = arr.indexOf(args[j]);

        if(index === -1) continue;

        arr.splice(index, 1);
        console.log(arr);

    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
