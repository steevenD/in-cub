const config = require('../config/config.js');
const User = require('../model/user.model.js');

checkDuplicateUserNameOrEmail = (req, res, next) => {
	// -> Check email is already in use

	User.findOne({ email: req.body.email })
	.exec((err, user) => {
		if (err && err.kind !== 'ObjectId'){
			res.status(500).send({
				message: "Error retrieving User with email = " + req.body.email
			});                
			return;
		}

		if(user){
			res.status(400).send("Fail -> email is already taken!");
			return;
		}

		User.findOne({ email: req.body.email })
		.exec((err, user) => {
			if (err && err.kind !== 'ObjectId'){
				res.status(500).send({
					message: "Error retrieving User with Email = " + req.body.email
				});                
				return;
			}
	
			if(user){
				res.status(400).send("Fail -> Email is already in use!");
				return;
			}

			next();
		});
	});
}



const signUpVerify = {};
signUpVerify.checkDuplicateUserNameOrEmail = checkDuplicateUserNameOrEmail;

module.exports = signUpVerify;