function getStuffFromDatabase(resolve, reject){
  var data = 'whee'
  setTimeout(function(){
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}]
      resolve(data)
  }, 10000)
  // reject() comment this in and out to see how the promise is handled!
}
function requestDataFromDatabase(){
  console.log('running')
  var data = new Promise(function(resolve, reject){
    getStuffFromDatabase(resolve, reject)
  })
  // if promise is successful (keeps me from putting all the logic in the callback)
  data.then(function(data){
    console.log(data, "ASynchronous")
    for (var i = 0; i < data.length; i++){
      console.log(data[i].name)
    }
  })
  data.catch(function(){
    console.log('failure')
  })
  console.log('end')
}
requestDataFromDatabase()
