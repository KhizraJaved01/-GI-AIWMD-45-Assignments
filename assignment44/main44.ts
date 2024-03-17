"use strict";
function makeSandwich(...items) {
    console.log("summary of the sandwich that is being ordered:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different number of arguments
makeSandwich("BLT (Bacon, Lettuce, Tomato)", "Club Sandwich", "Reuben Sandwich", "Philly Cheesesteak", "ham");
makeSandwich("Grilled Cheese", "Turkey and Avocado", "Ham and Swiss");
makeSandwich("Tuna Salad", "Chicken Caesar Wrap", "egg", "Veggie Delight");
