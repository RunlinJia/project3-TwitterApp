const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    description: {
        type: String,
        default: ''
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post' 
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
