function fib() {
  // Some variables here
    var a =0;
    var b= 0;
  function nacci() {

    count = a+b;
    if (count == 0){
      count +=1;
      a=b;
      b= count;
      console.log(count);
      return nacci
    }

    // count = b;
    a= b;
    b= count;
    console.log(count);
    // do something to those variables here
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
