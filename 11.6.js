function printInterval(a,b) {
    let i = a;
    let timer = setInterval(function() {
        console.log(i);
        if (i == b) clearInterval(timer);
        i++;
    }, 1000);
}
printInterval(1, 5)