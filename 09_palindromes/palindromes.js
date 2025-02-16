const palindromes = function (word) {
    word = word.toLowerCase();
    let arr = word.split('');

    let charSet=['!',',',' ','.'];
    function allowedChar(char) {
        if (!charSet.includes(char))
        return true;
        else return false;
    }

    arr = arr.filter(allowedChar)



    for (let i=0; i<arr.length; i++) {
        if (arr[i] !== arr[arr.length-i-1])
        return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
