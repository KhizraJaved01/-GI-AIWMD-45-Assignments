// Question 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table. Add one new guest to the beginning of your array. Add one new guest to the middle of your array. Use append() to add one new guest to the end of your list. Print a new set of invitation messages, one for each person in your list.
var guestArr = ['Rayan', 'Zarpash', 'Okasha', 'Rameez'];
var notAttend = 'Rayan';
var newGuest2 = 'Dayan';
guestArr[guestArr.indexOf(notAttend)] = newGuest2;
console.log(guestArr);
// guestArr.map((items) =>
//     console.log(`Dear ${items},i will feel so happy to see you at my place for dinner`)
// );
var guestBeg = 'Hafsa';
guestArr.unshift(guestBeg);
console.log(guestArr);
var middleGuest = 'Taseer';
var middlePara = guestArr.length / 3;
guestArr.splice(middlePara, 0, middleGuest);
console.log(guestArr);
guestArr.push('Mustajab');
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Hello ".concat(items, ",\n You are also ivited in this dinner."));
});
