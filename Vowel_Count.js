let count = 0;
function getCount (text)
{
    for (let i of vowels_count)
{
    let y = i.toLowerCase();
    if (y == 'a' || y=='e' || y=='i' || y=='o' || y=='u')
    {
        count ++;
    }
    
}
return count;
}
let vowels_count = prompt('prompt your sentense');
console.log(getCount(vowels_count));