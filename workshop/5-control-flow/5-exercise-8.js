// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
let j = 0;
let print = '';
for (let i = 0; i <= 7; i++) {
    for (j = 0; j <= i; j++) {
        print += '#';
    }
    console.log(print);
    print = '';
}