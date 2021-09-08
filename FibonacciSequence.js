function fibonacciSequence(num){
    var a = 1, b = 0, temp;
    var sequence= [];
    while (num > 0){
        sequence.push(a);
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }    
    return sequence;
}

console.log(fibonacciSequence(5));