function isPrime(num) {
    let factorial = 1;
    for (let i = 2; i <= num - 1; i++)
     {
        if (num % i == 0) {
           return 'Not Prime Number';
        }
     }  
    return 'Prime Number';
}
const number = isPrime(60);
console.log(number);