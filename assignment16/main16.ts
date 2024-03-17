// Question 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table. Add one new guest to the beginning of your array. Add one new guest to the middle of your array. Use append() to add one new guest to the end of your list. Print a new set of invitation messages, one for each person in your list.

let guestArr : string[] =['Rayan','Zarpash','Okasha','Rameez'];
let notAttend : string = 'Rayan';

let newGuest2 : string = 'Dayan';
guestArr[guestArr.indexOf(notAttend)]=newGuest2;
console.log(guestArr)

// guestArr.map((items) =>
//     console.log(`Dear ${items},i will feel so happy to see you at my place for dinner`)
// );

let guestBeg : string='Hafsa';
guestArr.unshift(guestBeg);
console.log(guestArr);


let middleGuest : string ='Taseer';
let middlePara = guestArr.length/3
guestArr.splice(middlePara,0,middleGuest);
console.log(guestArr);

guestArr.push('Mustajab');
console.log(guestArr);

guestArr.map((items)=>
    console.log(`Hello ${items},\n You are also ivited in this dinner.`)
);


