function isIsogram(str){
    //...
    let iso = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < iso.length; i++){
        let tmp = iso.replace(iso[i], '');
        for (let y = 0; y < tmp.length; y++){
            if (iso[i] == tmp[y]){
                count ++;
            }
        }
    }
    if (count > 0){
        return false;
        }
    else{
        return true;
    }

}
let text = prompt();
console.log(isIsogram(text));