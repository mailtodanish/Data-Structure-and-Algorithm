// JavaScript_Permutation_with_duplicate_numbers.js
// [3, 1, 1,1] permutation : 4P3 = 4
// [ [ 3, 1, 1, 1 ], [ 1, 3, 1, 1 ], [ 1, 1, 3, 1 ], [ 1, 1, 1, 3 ] ]

function allCombinatiuons(fx, notFixed, final) {

    if (notFixed.length == 0) {
        final.push(fx)
        return fx
    }

    let completedDigits = []
    for (let i = 0; i < notFixed.length; i++) {

        let element = notFixed[i];

        if (completedDigits.find((e) => e == element)) continue;
        completedDigits.push(element);

        let nf = [...notFixed]
        nf.splice(i, 1);
        allCombinatiuons([...fx, element], nf, final)
    }

}

let n = [3, 1, 1,1]
let final = []
let d = allCombinatiuons([], n, final)
console.error(final)