let text = prompt();
function xo (str){
    let x_letter = '';
    let o_letter = '';
    for (let i of str){
        if(i.toLowerCase() === 'x'){
            x_letter ++;
        }
        else if (i.toLowerCase() === 'o'){
            o_letter ++;
        }
    }
    if (x_letter == o_letter){
        return true;
    }
    else{
        return false;
    }
}
console.log(xo(text));