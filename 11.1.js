function resultArr () {

    const arr = [2,2,2,3,3,null,0,'str', true]
    
    let nul = 0;
    let integer = 0;
    let noInteger = 0;
    let str = 0;
    let lost = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
            if(arr[i] === 0) {
                nul += 1;
            }
            else if(arr[i] % 2 === 0) {
                integer +=1
            }
            else {
                noInteger += 1; 
            }
        }
        if(typeof arr[i] === 'string') {
            str += 1;
        }
        if( typeof arr[i] !== 'number' && typeof arr[i] !== 'string') {
            lost += 1;
        }
        } 
    console.log('Нулей в массиве: ' + nul)
    console.log('Четных чисел в массиве: ' + integer)
    console.log('Не четных чисел в массиве: ' + noInteger)
    console.log('Строк в массиве: ' + str)
    console.log('Не верный тип данных в массиве: ' + lost)
    }
    resultArr()