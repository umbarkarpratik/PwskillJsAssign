
function numberChecker(numberArray){

    return function(numberTocheck){
        return numberArray.includes(numberTocheck);
    };
}


const numberArray=[1,2,3,4,5];
const checkNumber=numberChecker(numberArray);
console.log(checkNumber(3));
