const mongoose = require('mongoose');

const postShema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    username: {type: String, default: ''},
    post: {type: String, default: ''},
    comments: [
        {
            userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            username: {type: String, default: ''},
            comment: {type: String, default: ''},
            createdAt: {type: Date, default: Date.now()}
        }
    ],
    totalLinks: {type: Number, default: 0},
    links: [
        {
            username: {type: String, default: ''}
        }
    ],
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Post', postShema);