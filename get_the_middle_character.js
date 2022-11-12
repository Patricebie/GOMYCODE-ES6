let word = prompt ('Enter your word');
let return_charater;
function middlecharacter(words){
    let charater_length = words.length;
    if ((charater_length % 2) == 1){
        return_charater = words[(charater_length - 1)/2];
        return return_charater;
    } 
    else if ((charater_length % 2) == 0)
    {
        return_charater = words[(charater_length / 2) -1] + words[(charater_length / 2)];
        return return_charater;
    }
}
console.log(middlecharacter(word));