function factorialnum(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++)
     {
        factorial = factorial * i;
     }  
    return factorial;
}
const number = factorialnum(3);
console.log(number);
