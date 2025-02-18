/*const fibonacci = function(input) {
    for (let i=0; i < (input+1); i++) {
        let current = 0;
        current = current + index;
        return current;
    }
};
*/

const fibonacci = function (input) {
    let first = 0
    let next = 1
    if (input < 0) {
        return "OOPS";
    }
    
    else if (input == 0) {
        return 0;
    }
    else if (input == 1) {
        return 1;
    }
    else {
        for (let i=0; i < (input-1); i++) {
            let current = next + first;
            first = next;
            next = current;
        }
        return next;
    }
}

// Do not edit below this line
module.exports = fibonacci;
