"use strict";
let animalName = ["Dog", "Cat", "Horse"];
for (let i = 0; i < animalName.length; i++) {
    console.log(animalName[i]);
}
for (let i = 0; i < animalName.length; i++) {
    if (animalName[i] === "Dog") {
        console.log("Dog is great pet");
    }
    else if (animalName[i] === "Cat") {
        console.log("Cat is beautiful pet");
    }
    else {
        console.log("Horse is such a fast and lovely animal");
    }
}
