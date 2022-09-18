const db = require('../config/mongoose');
const Task = require('../models/task');

module.exports.create_task = function(req, res) {
    console.log(req.body.date);
    Task.create({
        date: req.body.date,
        desc: req.body.desc,
        cat: req.body.cat
    }, function(err, newTask) {
        if(err) {
            console.log("Error in creating new task");
            return;
        }
        console.log(newTask.date);
        res.redirect('back');
    });
}