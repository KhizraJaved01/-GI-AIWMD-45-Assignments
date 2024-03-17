"use strict";
let magicians = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];
function show_magicians(magicians) {
    console.log("List of magician");
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicians);
