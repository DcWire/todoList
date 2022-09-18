const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');
const db = mongoose.connection; 

db.on('ERROR', console.error.bind(console, 'Error connecting to db'));

db.once('open', function() {
    console.log('Successfully connected to the database');
});