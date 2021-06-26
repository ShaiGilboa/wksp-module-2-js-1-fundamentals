// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q9
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.
//
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
let print = '';
for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
        for (let y = 0; y < 8; y++) {
            if (y % 2 === 0) {
                print += '#';
            } else {
            print += '_';
            }
        }
    } else {
        for (let y = 0; y < 8; y++) {
            if (y % 2 === 0) {
                print += '_';
            } else {
            print += '#';
            }
        }
    }
    print += "\n"
}
console.log(print);