const express = require('express')
const { ensureAuthenticated } = require('../config/auth')
const router = express.Router()

const { index, dashboard } = require('../controllers')

router.get('/', index)

router.get('/dashboard', ensureAuthenticated, dashboard)

module.exports = router