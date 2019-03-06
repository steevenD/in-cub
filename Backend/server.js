
var Consultant = require('./app/model/consultant.model.js');
const User = require('./app/model/user.model.js');

var cors = require('cors');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

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
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("App listening at http://%s:%s", host, port)
});

/**
 * to init with account
 */
function initial() {

    Consultant.count((err, count) => {
        if (!err && count === 0) {
            new Consultant({
                firstname: 'Steeven',
                lastname: 'Demay',
                description: 'des'
            }).save(err => {
                if (err) return console.error(err.stack)
                console.log("Consultant is added")
            });
        }
    });

    User.count((err, count) => {
        if (!err && count === 0) {
            new User({
                firstname: 'Steeven',
                lastname: 'Demay',
                email: 'steeven.demay@orange.fr',
                // mdp : 1234test
                password: '$2y$08$niQrehhygJVytw8OGleibuznXG5h/wsFZGGMWDtdLxbfWh3RFzMPC',
            }).save(err => {
                if (err) return console.error(err.stack);
                console.log("User is added")
            });
        }
    })}