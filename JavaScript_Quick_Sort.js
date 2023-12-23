/*
The quicksort algorithm picks a pivot element and then divide the array. 
Puts the smaller elements on the left side of the pivot and the larger ones on the right side. 
https://www.linkedin.com/in/mohdahshandanish/
December 23, 2023
*/

function QickSort(array){
   
    let rightArr =[]
    let leftArr = []
    
    // pivot element in the array to compare 
    // remove pivot element from array
    let p = array.splice(array.length - 1, 1)
    
    array.forEach((el)=>{
       if(el < p){
            rightArr.push(el)
        }else{
            leftArr.push(el)
        } 
    });
   
   
    if(rightArr.length > 0){
        rightArr = QickSort([...rightArr]);
    }
    
    if(leftArr.length > 0){
        leftArr = QickSort([...leftArr]);
    }
   
     return [...rightArr,...p,...leftArr]
}

let arr = [8,9,4,1,2,3,5,9,8,7];
console.error(QickSort([...arr]));