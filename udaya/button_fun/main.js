  var button = document.getElementById('buttonone');
  $('button').click().toggle(
    function (){ $(button).css('background-color','red')},
    function (){ $(button).css('background-color','blue')}
  );
  $('button').hover(
    function(){$(button).css('background-color','green') },
    function(){$(button).find('background-color:last').remove();
  }
  );

  // css('background-color','last')}
// var button = document.getElementById('buttonone');
// button.addEventListener('click',DoonClick);
// function DoonClick(){
// }
