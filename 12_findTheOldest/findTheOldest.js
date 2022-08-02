const findTheOldest = function(arrPeeps) {

    oldest = arrPeeps.reduce(function(oldest, nextPerson) {

        let age = 0;
        let oldestAge = 0;

        console.log(oldest);

        if(!nextPerson['yearOfDeath'])
        {
            age = (new Date()).getFullYear() - nextPerson['yearOfBirth'];
        }
        else age = nextPerson['yearOfDeath'] - nextPerson['yearOfBirth'];

        if(!oldest['yearOfDeath'])
        {
            oldestAge = (new Date()).getFullYear() - oldest['yearOfBirth'];
        }
        else {

            oldestAge = oldest['yearOfDeath'] - oldest['yearOfBirth'];
        }
        if(age > oldestAge) return nextPerson;

        return oldest;

    }, {name: 'noOne', yearOfBirth: 1, yearOfDeath: 1})

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
