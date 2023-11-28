function leapYear(year){
    const remainder = year % 4;
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
}
const checkValue = leapYear(1997);
console.log(checkValue);