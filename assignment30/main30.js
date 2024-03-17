"use strict";
let userNames = ["Shayan", "Irfan", "Imran", "Adeel"];
userNames.forEach((element) => {
    if (element === "Shayan") {
        console.log(`Hello ${element}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${element}, thank you for logging in again.`);
    }
});
