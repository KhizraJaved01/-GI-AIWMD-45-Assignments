let guests :string[]=['Fareen','Rubaisha','Abid','Khizr','Miral'];
console.log(`Unfortunately due to limited space,only 2 peoples are invited for dinner at my place.`)

while (guests.length >2) {
    const removedGuest =guests.pop();//remove the ast guest from the list
    console.log(`Sorry! We appologise Mr/Mrs ${removedGuest},You are not invited for the dinner.`);
}

guests.forEach((guest) => {
    console.log(`Dear Mr/Mrs: ` + guest + `, You are still invited.`)
});

guests.pop();
guests.pop();






