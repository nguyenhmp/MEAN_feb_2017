// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: File Structure and Simple Server

var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( bp.json() );

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

app.listen( port, function() {
    console.log( `server running on port ${ port }` );
});
