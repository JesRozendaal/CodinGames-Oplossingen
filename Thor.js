/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position
let thorX = initialTx;         // Maak een variabele aan om de positie van Thor op de X-as op te slaan
let thorY = initialTy;         // Maak een variabele aan om de positie van Thor op de Y-as op te slaan

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    let directionX = "";    // Maak een variabele aan om richting op de X-as aan te geven
    let directionY = "";    // Maak een variabele aan om richting op de Y-as aan te geven

    if (lightX < thorX) {
        directionX = "W";
        thorX --;
    }
    else if (lightX > thorX) {
        directionX = "E";
        thorX ++;
    }
    else {
        directionX = "";
    }

    if (lightY < thorY) {
        directionY = "N";
        thorY --;
    }
    else if (lightY > thorY) {
        directionY = "S"
        thorY ++;
    }
    else {
        directionY = "";
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(directionY + directionX);  // Log eerst de Y-as, anders gaat de richting verkeerd (WS ipv SW)
}
