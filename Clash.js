// Je hebt een wensenlijst met items die je wil hebben. (string)
// Je gaat in het vuil zoeken
// Als het op je lijst staat, log YOINK, anders YEET

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const wishlist = readline(); // The list containing the items to search for.
const N = parseInt(readline()); // The amount of items you will dig through.
for (let i = 0; i < N; i++) {
    const item = readline();

    if (wishlist.includes(item)) {   // Als het item op de wensenlijst staat, log ...
        console.log("YOINK")
    } else {
        console.log("YEET")   // anders ....
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');