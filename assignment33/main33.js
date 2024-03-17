"use strict";
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    let oridinalEnding;
    if (val === 1) {
        oridinalEnding = "st";
    }
    else if (val === 2) {
        oridinalEnding = "nd";
    }
    else if (val === 3) {
        oridinalEnding = "rd";
    }
    else {
        oridinalEnding = "th";
    }
    console.log(`${val}${oridinalEnding}`);
}
