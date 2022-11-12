function filter_list(l) {
    // Return a new array with the strings filtered out
    let arr = [];
    for (let i of l){
        if (Number.isInteger(i)){
            arr.push(i);
        }
    }
    return arr;
}