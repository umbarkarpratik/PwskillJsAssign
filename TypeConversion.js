// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.


function typeConversion(str){
   
    try{
        const num1=Number(str)
        if(isNaN(num1)){
            throw new Error("invalid number");
        }
        return num1;
    }
    catch(error){
        return "Invalid number"
    }

   
}
console.log(typeConversion(123));

