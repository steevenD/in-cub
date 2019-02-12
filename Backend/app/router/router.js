const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function(app) {

    const controller = require('../controller/controller.js');
 
	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail], controller.signup);
	
	app.post('/api/auth/signin', controller.signin);

	app.get('/api/consultants', controller.getAllConsultants);

	app.delete('/api/consultant/:idConsultant', controller.deleteConsultant);

	app.post('/api/consultant/:idConsultant', controller.updateConsultant);
};