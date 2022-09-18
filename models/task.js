const mongoose = require('mongoose');

const task_schema = new mongoose.Schema({
    desc: {
        type: String
    },
    cat: {
        type: String
    },
    date: {
        type: Date
    }
});

const task = mongoose.model('task', task_schema);

module.exports = task;