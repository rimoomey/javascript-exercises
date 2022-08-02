const palindromes = function (word) {

    //get rid of punctuation
    var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ s';
    let words = word.split('');

    var wordsWeWant = words.filter(function(letter) {
        return punctuation.indexOf(letter) === -1;
    })

    words = wordsWeWant.join('');
    words = words.toUpperCase();

    
    while(words.length > 1) {

        if(!(words[0] === words[words.length-1])) return false;

        words = words.slice(1,words.length-1);
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;