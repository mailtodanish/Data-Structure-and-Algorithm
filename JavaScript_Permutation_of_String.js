/**
 * Permutation of String
 *  INPUT : Unique Numbers = 1,2,3
 *  OUTPUT: possible combinations are
 *    1,2,3
 *    1,3,2
 *    2,1,3
 *    2,3,1
 *    3,1,2
 *    3,2,1
 *  Total combination is = 6 
 *    [Factorial 3]
 */
function possibleCombination(fixed, notFixed) {

    if (notFixed.length == 0) {
        console.error(fixed);
        return fixed;
    }

    for (let i of notFixed) {
        let nf = notFixed.reduce((acc, e) => {
            if (e != i) {
                acc.push(e)
            }
            return acc;
        }, []);
        possibleCombination([...fixed, i], nf)
    }

}

let numbers = [1, 2, 3, 4]
let a = possibleCombination([], numbers)