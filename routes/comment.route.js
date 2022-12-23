const express = require('express');
const commentRouter = express.Router()

const auth =  require('../middlewares/auth')
const commentController = require('../controllers/comment.controller')

commentRouter.post('/:id', auth.protect, commentController.createComment)




module.exports = commentRouter