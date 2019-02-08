const mongoose = require('mongoose'), Schema = mongoose.Schema;
 
const ConsultantSchema = mongoose.Schema({
		firstname: String,
		lastname: String,
		description: String,
});

module.exports = mongoose.model('Consultant', ConsultantSchema);