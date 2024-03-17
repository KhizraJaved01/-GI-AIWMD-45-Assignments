"use strict";
let personAge = 14;
if (personAge < 2) {
    console.log("The person is a baby.");
}
else if (personAge < 4) {
    console.log("The person is a toddler.");
}
else if (personAge < 13) {
    console.log("The person is a kid.");
}
else if (personAge < 20) {
    console.log("The person is a teenager.");
}
else if (personAge < 65) {
    console.log("The person is an adult.");
}
else if (personAge >= 65) {
    console.log("The person is an elder.");
}
else {
    console.log("Error!");
}
