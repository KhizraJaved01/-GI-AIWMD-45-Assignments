"use strict";
// Question 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestList = ['Rehan', 'Shabana', 'Wania', 'Okasha'];
for (let i = 0; i < guestList.length; i++) {
    console.log('Greetings! I would like to request your honorable presence mr/mrs: ' + guestList[i] + ', on a dinner orgranized by, The Siddiqui Group of Industries on the occasion of achieving the milestone of generating $450M in revenue for the current year.\n');
}
;
console.log(`To give you all an heads up, we are planning to invite ${guestList.length} people to the dinner.`);
