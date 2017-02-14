function fib(){
  var first_count = 0
  var second_count = 1
  function nacci(){
    console.log(second_count)
    var temp = second_count
    second_count = first_count + second_count
    first_count = temp
  }
  return nacci
}
var fibCounter = fib()
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
