// BEGINNING OF NODE
var Node = function(val){
  this.val = val;
  this.next = null;
}
Node.prototype.passThis = function(custom_return){
  // console.log(this, "this")
  // console.log(this.self, 'self')
  // console.log(custom_return, "My Return")
  return custom_return
}
// END OF NODE
// BEGINNING OF SINGLE LINKED LIST
var SingleList = function(){
  this.head = null;
}
SingleList.prototype.add = function(val){
  if(!this.head){
    this.head = new Node(val)
    return this
  }
  var current = this.head
  while(current.next){
    current = current.next
  }
  current.next = new Node(val)
  return this
}
SingleList.prototype.dequeue = function(callback){
  var eliminatedNode = this.head
  this.head = this.head.next
  eliminatedNode.next = null
  if (typeof(callback)=='function'){
    callback(eliminatedNode)
  }
  // console.log(this.head)
  return this
}
// END OF SINGLY LINKED LIST
// BEGIN INVOCATIONS
sList = new SingleList()

function anotherCallback(myNode){
  console.log("**********************")
  console.log('Seriously, Stop!', myNode)
}

sList.add(1).add(2).add(3).add(4).add(5).head.next.passThis(sList)
.dequeue(
  function callback(myNode){
    console.log(myNode.val, 'CHAINING INSANITY!')
  })
.dequeue(anotherCallback)
// console.log(sList)
