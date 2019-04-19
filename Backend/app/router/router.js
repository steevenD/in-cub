const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function(app) {

    const controller = require('../controller/controller.js');

    /**
	 * Auth
     */
	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail], controller.signup);
	
	app.post('/api/auth/signin', controller.signin);


    /**
	 * Consultant
     */
	app.get('/api/consultants', controller.getAllConsultants);

	app.delete('/api/consultant/:idConsultant', controller.deleteConsultant);

	app.put('/api/consultant/:idConsultant', controller.updateConsultant);

    /**
	 * Startup
     */
    app.get('/api/startups', controller.getAllStartups);

    app.delete('/api/startup/:idStartup', controller.deleteStartup);

    app.put('/api/startup/:idStartup', controller.updateStartup);

    app.post('/api/startup/', controller.createStartup);
};