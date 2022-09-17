
function sum(x) {
    return function (y) {
        return x + y
    }
}
console.log( sum(10)(5))

//Вариант где аргументы записываются и хранятся в переменной
function sum(x) {
    return function (y) {
        return x + y
    }
}
let func1 = sum(10);
let result = func1(5)
console.log(result)
