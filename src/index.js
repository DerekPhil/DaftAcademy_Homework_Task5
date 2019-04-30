import { fibonacci } from "../src/fibonacciSequence.js";

export const fib = (num, ...numbers) => {
    const numbArr = [];
    if (typeof(num) === "number") {
        for (let i = 0; i < num; i++) {
            numbArr.push(fibonacci(i));
        }
    }
    
    numbers.forEach( number => {
        const numbersArray = [];
        if(typeof(number) == "number") {
            for (let j = 0; j < number; j++) {
                numbersArray.push(fibonacci(j));
            }
        }
        numbArr.push(numbersArray);
    })
    return numbArr;
    
}
console.log(fib(8))