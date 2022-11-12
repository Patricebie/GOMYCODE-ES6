function descendingOrder(num){
    //...
    
    // console.log(Math.min(...numbers),numbers.length);
        //...
        let word = num.toString();
        let tmp ='';
        let count = word.length;
        for (let i =0; i < count; i++){
            tmp += Math.max(...word);
            word = word.replace(Math.max(...word), '');
        }
        return Number(tmp);
    }
    // return Number(tmp);
    
    // let numbers = prompt();
    let numbers = prompt();
    console.log(descendingOrder(numbers));