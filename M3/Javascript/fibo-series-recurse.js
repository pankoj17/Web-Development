function fibonacci(n) {
    if(n === 0){
        return [0];
    }
    else if(n === 1){
        return [0, 1];
    }
    else{
        let fibo = fibonacci(n-1);
        element = fibo[n-1] + fibo[n-2];
        fibo.push(element);
        return fibo;
    }   
}
const result = fibonacci(10);
console.log(result);