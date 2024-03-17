// Function to modify magician's names to add "the Great" and return a new array
function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}

// Function to show magicians
function show_magicians1(magicians: string[]): void {
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Original array of magician's names
let originalMagicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller","Lance Burton"];

// Call make_great() with a copy of the original array and store the modified array in a separate array
let modifiedMagicians: string[] = make_great([...originalMagicians]);

// Show the original list of magicians
console.log("Original Magicians:");
show_magicians1(originalMagicians);

// Show the list of magicians with "the Great" added to each name
console.log("\nModified Magicians:");
show_magicians1(modifiedMagicians);