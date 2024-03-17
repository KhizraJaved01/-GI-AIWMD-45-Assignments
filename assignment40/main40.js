"use strict";
function makeAlbum(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = makeAlbum("ali", "light");
console.log(album);
album = makeAlbum("asim", "red wave");
console.log(album);
album = makeAlbum("arijit", "breeze");
console.log(album);
