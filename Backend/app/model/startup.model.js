const Consultant = require('../model/consultant.model.js');

const mongoose = require('mongoose'), Schema = mongoose.Schema;
const ConsultantSchema = mongoose.model('Consultant').schema;

const StartupSchema = mongoose.Schema({
		name: String,
		businessLine: String,
        legalRepresentativeName: String,
        cofounderNumber: Number,
        description: String,
        address: String,
        consultant: ConsultantSchema
});

module.exports = mongoose.model('Startup', StartupSchema);