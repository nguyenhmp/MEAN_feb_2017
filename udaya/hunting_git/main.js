var button = document.getElementById('buttonone')

button.addEventListener('click',fetch);
var x;
function fetch(){
  console.log("here")
  $.get('https://api.github.com/users/stuffyudaya', displayName)
    function displayName(data){
      x= data.name+" "+ data.login;
      $('body').append('<p><strong>'+x+'</strong></p>');
      console.log(x);
    }
}
