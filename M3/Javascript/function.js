function sayLoveYou(num){
    var res = num * 2;
     return res;
}

 var first = sayLoveYou(5);
  var sec = sayLoveYou(10);
  console.log(first, sec);

function sum(n1, n2){
    var add = n1 + n2;
    return add;
}  
/** summation of two num and call function*/ 
var total = sum(15, 17);
console.log(total);


function largenum(numbers) {
    var num = numbers[0];
    for (var i =0; i < numbers.length; i++) {
        
        if(numbers[i] > num){
            num = numbers[i];
        }
        
    }
    return num;
}

var numbers =[22, 250, 23, 25, 26, 200, 27, 50];
var largenumber = largenum(numbers);
console.log(largenumber);

