const sumAll = function(input1,input2) {
    let startNum = (input1 > input2) ? input2 : input1;
    let endNum = (input1 > input2) ? input1 : input2;
    let subTotal = 0;
    
    if (
        (input1<0)
        ||(input2<0)
        || !Number.isInteger(input1)
        || !Number.isInteger(input2)
    ) return("ERROR");
    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        subTotal += currentNum;
    }
    return subTotal;
};

// Do not edit below this line
module.exports = sumAll;



/*

*/