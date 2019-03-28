var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    name: {type: String, required: true},
    author:{type: mongoose.Types.ObjectId, required: false, default: null}
});


//export that schema
module.exports = mongoose.model('book', Schema,"books");
