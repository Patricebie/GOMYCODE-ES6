let num = prompt();
function square(digit){
    let concat='';
    
    for (let i of digit){
        concat += `${Math.pow(Number(i), 2)}`;
    }
    return concat;
}
console.log(square(num));