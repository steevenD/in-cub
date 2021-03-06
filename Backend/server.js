var faker = require('faker');

var Consultant = require('./app/model/consultant.model.js');
const User = require('./app/model/user.model.js');

var Startup = require('./app/model/startup.model.js');
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
    });

    Consultant.count((err, count) => {
        if (!err && count === 0) {
            for (let i = 0; i < 30; i++) {
                mockStartup(i).save(err => {
                    if (err) return console.error(err.stack)
                    //console.log("CONSULTANT is added")
                });
            };
        }
    });
}

function mockConsultant() {
    consultant = new Consultant({
        firstname: faker.name.firstName(),
		lastname: faker.name.lastName(),
        description: faker.name.jobDescriptor()
    });
    consultant.save(err => {
        if (err) return console.error(err.stack)
        //console.log("CONSULTANT is added")
    });
    return consultant;
}

function mockStartup(i) {
    if (i % 2 === 0) {
        return new Startup({
            name: faker.company.companyName().substr(0, 19),
            businessLine: faker.commerce.department().substr(0, 8),
            legalRepresentativeName: faker.finance.accountName().substr(0, 13),
            cofounderNumber: 3,
            description: faker.company.catchPhraseDescriptor(),
            address: faker.address.streetAddress(false).substr(0, 23),
            consultant: mockConsultant()
        });
    } else {
        return new Startup({
            name: faker.company.companyName().substr(0, 19),
            businessLine: faker.commerce.department().substr(0, 8),
            legalRepresentativeName: faker.finance.accountName().substr(0, 13),
            cofounderNumber: 1,
            description: faker.company.catchPhraseDescriptor(),
            address: null,
            consultant: mockConsultant()
        });
    }
}
