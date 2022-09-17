function func1 (num) {
    let isPrime,result;
    isPrime = true;
    if(num>1 && num <= 1000) {
        for(i = 2; i < num; i++){
            if(num % i === 0) {
                isPrime = false;
            }
        }
        result = isPrime ? `Число ${num} - Простое число` : `Число ${num} - Составное число`;
    } 
    else if (num > 1000) {
        result = 'Данные не верны';
    }
    return result;
}
console.log(func1(1001))