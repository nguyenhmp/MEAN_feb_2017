function fib() {
    var fib1 = 0;
    var fib2 = 1;
    function nacci(){
        var latestFib = fib1 + fib2;
        console.log(latestFib);
        fib1 = fib2;
        fib2 = latestFib;
    }
    return nacci;
}

var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
