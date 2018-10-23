const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Post = require('../models/postModels');

module.exports = {
    async AddPost(req, res) {
        console.log(req.cookies);
        console.log(req.user);
        const schema = Joi.object().keys({
            post: Joi.string()
                .min(3)
                .max(100)
                .required()
        });

        const {error, value} = Joi.validate(req.body, schema);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json({msg: error.details});
        }

        const body ={
            user: req.user._id,
            username: req.user.username,
            post: req.body.post,
            created: new Date()
        };

        Post.create(body)
            .then(post => {
                return res
                    .status(HttpStatus.OK)
                    .json({message: 'Post created', post});
            })
            .catch(err => {
                return res
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .json({message: 'Error occured'});
            });
    }
};