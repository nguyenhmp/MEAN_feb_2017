      // x = [3,5,'Dojo','rocks','Michael','Sensei']
      // for(var i=0; i<x.length; i++){
      //   console.log(x[i]);
      // }
      // x.push(100);
      // newarr = ['hello', 'world', 'JavaScript is Fun']
      // x = x.concat(newarr);
      // console.log(x);
      // var count = 0
      // for (var i = 1; i<=500; i++){
      //   count = count + i;
      // }
      // console.log(count);
      //
      // arr = [1,5,90,25,-3,0]
      // var minimum;
      // for(var i = 0; i<arr.length; i++){
      //   if(minimum === undefined){
      //     minimum = arr[i]
      //   }
      //   else{
      //     if(arr[i] < minimum){
      //       minimum = arr[i];
      //     }
      //   }
      // }
      // console.log(minimum)
      //
      // arr = [1,5,90,25,-3,0]
      // total = 0;
      // for(var i=0; i<arr.length; i++){
      //   total += arr[i];
      // }
      // console.log(total/arr.length)

      var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for(key in new_ninja){
  console.log(key,":", new_ninja[key])
}
