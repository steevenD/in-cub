const Consultant = require('../model/consultant.model.js');

const mongoose = require('mongoose'), Schema = mongoose.Schema;
 
const StartupSchema = mongoose.Schema({
		name: String,
		businessLine: String,
        legalRepresentativeName: String,
        cofounderNumber: Number,
        description: String,
        address: String,
        consultant: Consultant
});

module.exports = mongoose.model('Startup', StartupSchema);