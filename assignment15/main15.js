"use strict";
// Question 15, Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it. Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. Print a second set of invitation messages, one for each person who is still in your list.
let guest1List = [' Rayan ', 'Zarpash', 'Okasha', 'Rameez'];
for (let i = 0; i < guest1List.length; i++) {
    console.log('Greetings! I would like to request your honorable presence mr/mrs: ' + guest1List[i] + ', \non a dinner orgranized by, The Siddiqui Group of Industries on the occasion of achieving the milestone of generating $450M in revenue for the current year.\n');
}
;
let absentGuest = 'Rayan';
let newGuest = 'Khizra Javed';
guest1List[0] = newGuest;
for (let i = 0; i < guest1List.length; i++) {
    console.log('Greetings! I would like to request your honorable presence mr/mrs: ' + guest1List[i] + ', \non a dinner orgranized by, The Siddiqui Group of Industries on the occasion of achieving the milestone of generating $450M in revenue for the current year.\n');
}
console.log(`Unfortunately, Mr.${absentGuest} will not be able to attend the dinner with us.`);
