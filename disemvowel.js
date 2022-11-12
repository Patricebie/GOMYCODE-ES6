let newword = '';
function remove_vowel (text)
{
    for (let i of text)
{
    let y = i.toLowerCase();
    if (y == 'a' || y =='e' || y =='i' || y =='o' || y =='u')
    {} 
    else{
        newword += i;
    }
    
}
return newword;
}
let vowels_remove = prompt('prompt your sentense');
console.log(remove_vowel(vowels_remove));