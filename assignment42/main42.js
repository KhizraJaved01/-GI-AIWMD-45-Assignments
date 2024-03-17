"use strict";
let magicians1 = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];
function make_Great(magicians1) {
    for (let i = 0; i < magicians1.length; i++) {
        console.log(`Great to : ${magicians1[i]}`);
    }
}
make_Great(magicians1);
