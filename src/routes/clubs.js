const express = require('express')
const router = express.Router()

router.post('/', require('../../src/services/clubs/create'))

module.exports = router
