var guests = ['Fareen', 'Rubaisha', 'Abid', 'Khizr', 'Miral'];
console.log("Unfortunately due to limited space,only 2 peoples are invited for dinner at my place.");
while (guests.length > 2) {
    var removedGuest = guests.pop(); //remove the ast guest from the list
    console.log("Sorry! We appologise Mr/Mrs ".concat(removedGuest, ",you rae not invited for the dinner."));
}
guests.forEach(function (guest) {
    console.log("\nDear Mr/Mrs: " + guest + ", You are still invited.\n");
});
