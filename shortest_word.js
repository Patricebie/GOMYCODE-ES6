let str = 'hello am Patrice a good man tes is bacj';
var tabx = [];
let tmp = 0;
var min = 1000000;
var max = -1;
for (let i = 0; i < str.length; i++){
    
    if (str[i] != ' '){
        tmp ++;
    } 
    if ( str[i] == ' ' || i == (str.length - 1))
    {
        if ( tmp > max){
            max = tmp;
          }
          if (tmp < min) {
            min = tmp;
          }
        tmp = 0;
    } 
}
console.log(min);