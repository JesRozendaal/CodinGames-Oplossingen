// Vindt het midden van een driehoek

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
sumx=0                                        // oplossing overgenomen van iemand anders....
sumy=0
for (let i = 0; i < 3; i++) {                 // Dit was gegeven
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);

    sumx+=x                                   // oplossing
    sumy+=y
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log((sumx/3).toFixed(2) +' ' + (sumy/3).toFixed(2));