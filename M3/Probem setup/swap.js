let x, y;
x = 7;
y = 5;
let temp = x;
x = y;
y = temp;

console.log(x ,y);


// without swap variable
let a,b;
a=5;
b=7;
a=a+b;
b=a-b;
a=a-b;
console.log(a, b);