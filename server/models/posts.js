const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User' 
    }]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
