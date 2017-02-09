var x = [3,5,"Dojo","rocks","Michale","Sensei"]
for (var i = 0; i < x.length; i++){
    console.log(x[i]);
}
x.push(100);
x.push(["hello","world","JavaScript is Fun"]);
console.log(x);
sum500 = ()=>{
        var sum = 0;
        for (var i = 1; i < 501; i++){
        sum += i;
    }
    return sum;
}
console.log(`Sum of 500 numbers: ${sum500()}`);
array = [1, 5, 90, 25, -3, 0];
min = (array)=>{return Math.min(...array);}
max = (array)=>{return Math.max(...array);}
console.log(`Min: ${min(array)}, Max: ${max(array)}`);
console.log(Math.min(...array));
var new_ninja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript',
    dojo: 'Dallas'
}
for( item in new_ninja){
    console.log(`key: ${item}, value: ${new_ninja[item]}`);
}
