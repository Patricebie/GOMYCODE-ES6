let text = prompt('prompt your word');
let accum_text = '';
function accum (word){
    for (let i =0; i < (text.length); i++){
        if (i == 0){
            accum_text += text[i].toUpperCase();
        }
        else
        {
            accum_text += `-${text[i].toUpperCase()}${text[i].toLocaleLowerCase().repeat(i)}`;
        }
}
return accum_text;
}
console.log(accum(text));