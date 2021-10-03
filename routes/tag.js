const express = require('express')
const db = require('../config/db')
const { create,addTag } = require('../controllers/tag')
const router = express.Router();

router
.route('/:id')
.post(addTag)

router
.route('/')
.post(create)

module.exports = router