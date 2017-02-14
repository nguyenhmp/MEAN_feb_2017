// QUEUE OBJECT CREATOR
function Queue(){
  var database = []
  this.enqueue = function(val){
    database.push(val)
  }
  this.size = function(){
    return database.length
  }
  this.dequeue = function(){
    var answer = database[0]
    var length = database.length
    for(var i=0; i<database.length-1;i++){
      database[i] = database[i+1];
    }
    database.length = length-1;
    return answer
  }
}

// BEGIN TEST CASES TO BUILD QUEUE OBJECT
// var test = new Queue();
// test.enqueue(5)
// test.enqueue(10)
// test.enqueue(15)
// console.log(test)
// console.log(test.size())
// console.log(test.dequeue())
// console.log(test.dequeue())
// console.log(test.dequeue())
// console.log(test.dequeue())
// console.log(test.size())

// STACK OBJECT CREATOR
function Stack(){
  var database = []
  this.push = function(val){
    database.push(val)
  }
  this.pop = function(val){
    return database.pop();
  }
  this.size = function(){
    return database.length
  }
}

// BEGIN TEST CASES TO BUILD STACK OBJECT
// var stack1 = new Stack()
// console.log(stack1)
// stack1.push(20)
// stack1.push(30)
// console.log(stack1.size())
// console.log(stack1);
// console.log(StackCopy(stack1).size())

// Copy Stack using Queue Algorithm
// Make sure to uncomment the stack1 build cases!
function StackCopy(Stack1){
  var Queue1 = new Queue();
  var Stack2 = new Stack();

  while(Stack1.size() > 0){
    Stack2.push(Stack1.pop());
  }
  while(Stack2.size() > 0){
    Queue1.enqueue(Stack2.pop());
  }
  while(Queue1.size() > 0){
    var temp = Queue1.dequeue();
    Stack1.push(temp);
    Stack2.push(temp);
  }
  return Stack2
}

// StackCopy Algorithm Incovation
// console.log(StackCopy(stack1))
