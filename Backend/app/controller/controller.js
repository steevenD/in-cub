const config = require('../config/config.js');

const User = require('../model/user.model.js');
const Consultant = require('../model/consultant.model.js');
const Startup = require('../model/startup.model.js');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

/**
 * Auth
 */
exports.signup = (req, res) => {
	// Save User to Database
	const user = new User({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8)
	});

    // Save a User to the MongoDB
    user.save().then(savedUser => {
	
		savedUser.save(function (err) {
			if (err) {
                res.status(500).send("Error -> " + err);
            } else {
                res.status(200);
            }
		});
    }).catch(err => {
        res.status(500).send("Fail! Error -> " + err);
    });
};

exports.signin = (req, res) => {
	console.log("Sign-In");

	User.findOne({ email: req.body.email })
	.exec((err, user) => {
		if (err){
			if(err.kind === 'ObjectId') {
				return res.status(404).send({
					message: "User not found with email = " + req.body.email
				});                
			}
			return res.status(500).send({
				message: "Error retrieving User with email = " + req.body.email
			});
		}
					
		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}
		
		var token = jwt.sign({ id: user._id }, config.secret, {
		  expiresIn: 86400 // expires in 24 hours
		});
		
		res.status(200).send({ auth: true, accessToken: token, user: {
			id: user.id,
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email
			} });
	});
};

exports.userContent = (req, res) => {
	User.findOne({ _id: req.userId })
	.select('-_id -__v -password')
	.exec((err, user) => {
		if (err){
			if(err.kind === 'ObjectId') {
				return res.status(404).send({
					message: "User not found with _id = " + req.userId
				});                
			}
			return res.status(500).send({
				message: "Error retrieving User with _id = " + req.userId	
			});
		}
					
		res.status(200).json({
			"description": "User Content Page",
			"user": user
		});
	});
};

/**
 * Consultant
 */

exports.getAllConsultants = (req, res) => {
    Consultant.find({})
        .exec((err, consultants) => {
            if (err){
                return res.status(500).send({
                    message: "Interne error"
                });
            }
            res.status(200).send(
                consultants
            );
        });
};

exports.deleteConsultant = (req, res) => {
	Consultant.findByIdAndRemove(req.params.idConsultant, (err, consultant) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Consultant was delete",
            id: consultant.id
        };
        return res.status(200).send(response);
    });
};


exports.updateConsultant = (req, res) => {
    Consultant.findByIdAndUpdate(req.params.idConsultant, req.body, (err, consultant)=> {
        if (err) return res.status(500).send(err);
        return res.send(consultant);
    });
};


/**
 * Startup
 */
exports.getAllStartups = (req, res) => {
    Startup.find({})
        .exec((err, startups) => {
            if (err){
                return res.status(500).send({
                    message: "Interne error"
                });
            }
            res.status(200).send(
                startups
            );
        });
};

exports.deleteStartup = (req, res) => {
    Startup.findByIdAndRemove(req.params.idStartup, (err, startup) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Startup was delete",
            id: startup.id
        };
        return res.status(200).send(response);
    });
};


exports.updateStartup = (req, res) => {
    Startup.findByIdAndUpdate(req.params.idStartup, req.body, (err, startup)=> {
        if (err) return res.status(500).send(err);
        return res.send(startup);
    });
};

exports.createStartup = (req, res) => {
    const newStartup = new Startup(req.body);
    newStartup.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newStartup);
    });
};