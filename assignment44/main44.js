"use strict";
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("summary of the sandwich that is being ordered:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different number of arguments
makeSandwich("BLT (Bacon, Lettuce, Tomato)", "Club Sandwich", "Reuben Sandwich", "Philly Cheesesteak", "ham");
makeSandwich("Grilled Cheese", "Turkey and Avocado", "Ham and Swiss");
makeSandwich("Tuna Salad", "Chicken Caesar Wrap", "egg", "Veggie Delight");
