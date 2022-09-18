// var tasks = [
//     {
//         desc: "Entire home",
//         cat: "Hobby",
//         date: "12-12-15"
//     }, 
//     {
//         desc: "Study 3 chapter",
//         cat: "Academics",
//         date: "12-12-15"
//     }
// ]

const db = require('../config/mongoose');
const Task = require('../models/task');

module.exports.home = function(req, res) {

    Task.find({}, function(err, tasks) {
        if(err) {
            console.log('Error in fetching tasks');
            return;
        }
        return res.render('home', {
            title : 'To do list',
            task_list: tasks
        });
    });
}