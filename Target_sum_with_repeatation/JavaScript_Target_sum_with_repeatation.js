
/**
 *  let arr = [1,2,3]
 *  target sum = 6
 *  List of all subsets whose sum is equal to 8.
 *  Repeatation is allowed.
 **/


function perfectSumWithRepeattation(fixedPosition, notFixedPosition, totalSum) {

    let sum_of_fixed = fixedPosition.reduce((acc, e) => {
        return acc + e;
    }, 0);

    // case-01 : don't go next
    if (sum_of_fixed - totalSum > 0) {
        return undefined
    }

    // case 02: dont go next
    if (sum_of_fixed == totalSum) {
        return fixedPosition;
    }

    for (let a of notFixedPosition) {
        let fx = [...fixedPosition]
        let c = notFixedPosition.reduce((acc, e) => {
            if (e != a) {
                acc.push(e)
            }
            return acc;
        }, []);

        let d = a;
        while (d <= 8) {
            fx.push(a)
            let r = perfectSumWithRepeattation(fx, c, totalSum)
            if (r) {
                console.error(`${perfectSumWithRepeattation(fx, c, totalSum).join("+")}=8`)
            }
            d += d;
        }




    }

}

let a = [1, 2, 7, 5]

let totalSum = 8;

perfectSumWithRepeattation([], a, totalSum)

