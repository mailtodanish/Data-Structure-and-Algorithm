/**
 *  let arr = [1,2,3]
 *  target sum = 6
 *  List of all subsets whose sum is equal to 8.
 *  All possible Subset = !3 + 3P2 + 3P1 = 15
 **/

function perfectSum(fixedPosition, notFixedPosition, totalSum) {

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
        fx.push(a)

        let r = perfectSum(fx, c, totalSum)
        if(r){
            
            console.error(`${perfectSum(fx, c, totalSum).join("+")}=8`)
        }
        

    }

}

let a = [5,1, 2, 3,4]
let totalSum = 8;
perfectSum([], a, totalSum) 