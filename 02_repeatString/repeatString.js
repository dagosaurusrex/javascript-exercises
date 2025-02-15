
const repeatString = function(word, repeats) {
    if (repeats < 0) return "ERROR";
    let phrase = "";
    for (let i = 0; i < repeats; i++) {
        phrase += word;
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
