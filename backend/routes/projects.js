var express = require('express');
var projects = require('../models/projects');
var router = express.Router();




router.get("/allProjects", async function(req,res,next){
    const projectArr = await projects.find();
    res.json(projectArr);
})

module.exports = router;