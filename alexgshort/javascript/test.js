jQuery(document).ready(function($) {
    var customObject = {
      name:'California, Eureka',
      onClick:function(){
        console.log("I've been clicked");
        console.log(this.name);
      }
    }
    var newObject = {
        name:"West Virginia"
    }
    // our behavior on click.
    $('#button').click(customObject.onClick.bind(newObject));
    $('#content').append("<p>I'm here</p>");
    if (window.jQuery) {
        console.log("jQuery is loaded.");
    }
});// our test object
