// Ekapob Ukritnukun
// ThaiGQ@gmail.com

function fib() {
    var fibonacci = [0];
    var sum = 0;
    function nacci() {
        if (fibonacci.length > 2) {
            sum = fibonacci[1] + fibonacci[2];
            fibonacci[0] = fibonacci[1];
            fibonacci [1] = fibonacci[2];
            fibonacci [2] = sum;
            console.log(fibonacci[2]);
            }
        else if (fibonacci.length > 1) {
            sum = fibonacci[0] + fibonacci[1];
            fibonacci [2] = sum;
            console.log(fibonacci[2]);
        }
        else {
            fibonacci[1] = 1;
            console.log(fibonacci[1]);
        }
    }
    return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter() // should console.log "13"
fibCounter() // should console.log "21"
