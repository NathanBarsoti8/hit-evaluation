const express = require('express')
const router = express.Router()

router.post('', require('../../src/services/players/create'))

module.exports = router
