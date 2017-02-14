function binarySearch(arr, val){
  while(arr.length){
    var middle = arr[Math.floor(arr.length/2)]
    if (val == middle){
      console.log('TRUE!!!')
      return true
    }
    else if (val < middle){
      arr.length = Math.floor(arr.length/2)
    }
    else{
      arr = arr.slice(Math.ceil(arr.length/2), arr.length)
    }
  }
  if (arr[0] == val || arr[1] == val){
    console.log('TRUE!!!')
    return true
  }
  else{
    console.log('FALSE!!!')
    return false
  }
}

for (var i = 0; i<=12; i++){
  sorted_array = [1,2,3,4,5,6,7,8,9,10,11]
  binarySearch(sorted_array, i)
}
