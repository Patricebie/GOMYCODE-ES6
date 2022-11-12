let num = prompt('prompt your numbers');
// function highAndLow(numbers){
    let tab = num.split(' ');
    let max = -2147483647;
    let min = 2147483647;
console.log(`${Math.max(...tab)} ${Math.min(...tab)}`);
