array = [1,2,3,4,5,6,7,8,9,10]
function shift_forward(arr){
  var answer = arr[0]
  var length = arr.length
  for(var i=0; i<arr.length-1;i++){
    arr[i] = arr[i+1];
  }
  arr.length = length-1;
  console.log(arr)
  return answer
}
console.log(shift_forward(array))
