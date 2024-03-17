// Question 18: Seeing the World: Think of at least five places in the world you’d like to visit. Store the locations in a array. Make sure the array is not in alphabetical order. Print your array in its original order. Print your array in alphabetical order without modifying the actual list. Show that your array is still in its original order by printing it. Print your array in reverse alphabetical order without changing the order of the original list. Show that your array is still in its original order by printing it again. Reverse the order of your list. Print the array to show that its order has changed. Reverse the order of your list again. Print the list to show it’s back to its original order. Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed. Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Store the locations in a array. Make sure the array is not in alphabetical order.
let favDestination: string [] = ['Canada', 'Switzerland', 'Norway', 'Thailand', 'Saudi Arabia']
// Print your array in its original order.
console.log("Original Array:", favDestination);
// Print your array in alphabetical order without modifying the actual list.
let sortedArray: string [] = [...favDestination].sort(); // three dots create a copy of the original array
console.log("Sorted Array:", sortedArray);
//  Show that your array is still in its original order by printing it.
console.log("Original Array:", favDestination);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('In Reverse Alphabetical ' , [...favDestination].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Original Array:", favDestination);
// Reverse the order of your list, Print the array to show that its order has changed.
console.log('Order reversed: ' , favDestination.reverse());
//  Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Original order: ' , favDestination.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Alphabetical order: ' , favDestination.sort())
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Reverse Alphabetical order: ' , favDestination.sort().reverse());