const db = require('../config/mongoose');
const Task = require('../models/task');

module.exports.delete_task = function(req, res) {
    Task.findByIdAndDelete(req.query.id, function(err) {
        if(err) {
            console.log('Error in deleting');
            return;
        }
        return res.redirect('back');
    });    
}