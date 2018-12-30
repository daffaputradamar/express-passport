const express = require('express')
const router = express.Router()

const { login, register, create, authenticate, logout } = require('../controllers/users')

const User = require('../models/User')

router.get('/login', login)
router.get('/register', register)
router.post('/register', create)
router.post('/login', authenticate)
router.get('/logout', logout)

module.exports = router