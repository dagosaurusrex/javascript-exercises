const removeFromArray = function(arr, ...invalidItems) {
    let validItems = [];
    for (let arrPosition=0; arrPosition<arr.length; arrPosition += 1) {
        if (!invalidItems.includes(arr.at(arrPosition))) {
            validItems.push(arr.at(arrPosition));
        }
    }
    return validItems;
};

// Do not edit below this line
module.exports = removeFromArray;




/*
If the first item in the array is not equal to invalidItems then validItems += (the first item in orignalArray);
If the next item in originalArray is not equal to invalidItems then validItems += (the next item in the originalArray);
If the any item in originalArray is equal to invalidItems then continue;

If the first item in origianlArray is not equal to the first invalidItem, then check the next item in invalidItems.
if the first item in originalarry is not equal to the second invalidItem, then check the next item in invalidItems.
Continue until there are no more items in invalidItem array
Continue until there are no more items in original array;
*/
