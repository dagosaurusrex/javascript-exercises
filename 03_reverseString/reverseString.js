const reverseString = function(originalText) {
    let result = "";
    if (!originalText) return(result);
    for (let i = originalText.length-1; i >= 0; i--)  {
        result += originalText.at(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
