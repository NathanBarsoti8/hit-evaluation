const express = require('express')
const router = express.Router()

router.get('/', require('../../src/services/clubs/list'))
router.post('/', require('../../src/services/clubs/create'))

module.exports = router
