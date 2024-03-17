"use strict";
// Name Cases
let userName = "Khizra Javed";
// In owercase
console.log("lowercase:", userName.toLowerCase());
//In uppercase
console.log("uppercase:", userName.toUpperCase());
//In titlecase
console.log("titlecase:", userName.replace(/\b\w/g, c => c.toUpperCase()));
