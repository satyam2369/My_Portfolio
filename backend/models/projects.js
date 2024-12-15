const mongoose = require('mongoose');

const projSchema = mongoose.Schema({
    projectTitle: String,
    projectDescription: String,
    techStack: [{
        type: String
    }],
    projectImg: String,
    visitLink: String
})

module.exports = mongoose.model("projectSchema",projSchema); 