var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
require('./app/router/router.js')(app);

  
// Configuring the database
const config = require('./app/config/config.js');
const mongoose = require('mongoose');
 
mongoose.Promise = global.Promise;
 
// Connecting to the database
mongoose.connect(config.url, { useNewUrlParser: true })
.then(() => {
	console.log("Successfully connected to MongoDB.");    
	initial();
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();	
});
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})

/**
 * to init with account
 */
function initial(){
	/**Role.count( (err, count) => {
		if(!err && count === 0) {
			 // USER Role ->
			new Role({
				name: 'USER'
			}).save( err => {
				if(err) return console.error(err.stack)
				console.log("USER_ROLE is added")
			});

			// ADMIN Role ->
			new Role({
				name: 'ADMIN'
			}).save( err => {
				if(err) return console.error(err.stack)
				console.log("ADMIN_ROLE is added")
			});

			// PM Role ->
			new Role({
				name: 'PM'
			}).save(err => {
				if(err) return console.error(err.stack)
				console.log("PM_ROLE is added")
			});
		}
	});**/
}