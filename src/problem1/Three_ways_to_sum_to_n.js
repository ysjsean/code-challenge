var sum_to_n_a = function(n) {
    // your code here
    if(n == 0) return n;
    let sign = "+";
    if(n < 0) sign = "-";

    let result = 0
    switch(sign){
        case "+":
            for(var i = n; i > 0; i--){
                result += i;
            }
            break;
        case "-":
            for(var i = n; i < 0; i++){
                result += i;
            }
            break;
    }
    
    return result;
};

var sum_to_n_b = function(n) {
    // your code here
    if(n == 0) return n;

    let result = 0;
    let positive = true;
    if(n < 0) positive = false;

    result += Math.abs(n) + sum_to_n_b(Math.abs(n)-1)

    return positive ? result : (-1)*result;
    
};

var sum_to_n_c = function(n) {
    // your code here
    if(n == 0) return n;

    let result = 0;
    let positive = true;
    if(n < 0) positive = false;
    
    let counter = 0;

    do{
        counter++;
        result += counter;
    }while(Math.abs(n)-counter > 0);

    return  positive ? result : (-1)*result;
};

// Assuming 
console.log(sum_to_n_a(-5));
console.log(sum_to_n_b(-5));
console.log(sum_to_n_c(-5));