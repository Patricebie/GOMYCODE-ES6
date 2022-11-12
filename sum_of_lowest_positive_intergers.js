let numbers = [5, 8, 12, 19, 22];
    //Code here
    let tmp = Math.min(...numbers);
    for (let i = 0; i < numbers.length; i++){
        if (number[i] == tmp){
            numbers = numbers.splice(indexOf(number[i]), 1);
        }
    }
    console.log(numbers.length);
    let tmp2 = Math.min(...numbers);
    console.log('tmp2',tmp2);
    let tmp3 = numbers.replace(tmp2, '');
    console.log(tmp3);
    // return tmp2 + Math.min(...tmp3);
  
  
  console.log(tmp2 + Math.min(...tmp3));