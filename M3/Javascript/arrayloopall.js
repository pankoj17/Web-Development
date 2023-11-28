var ageArray = [12, 14, 15, 17, 18];
var age = ageArray[2];
var position = ageArray.indexOf(17);
console.log(age);
console.log(position);
ageArray[1] = 19;
console.log(ageArray);
ageArray.push(21);
console.log(ageArray);
console.log(ageArray.length);
ageArray.pop();
console.log(ageArray);
ageArray.shift();
console.log(ageArray);
ageArray.unshift(8);
console.log(ageArray);
console.log(ageArray.slice(1, 4));


for(var i=0; i <= 10; i++){
    console.log(i);
}
var num = 5;
switch(num){
    case 100:
        console.log('Find');
        break;
    case 5:
        console.log('Find u'); 
        break;   
    default:
        console.log("Not Find");
        break;
}