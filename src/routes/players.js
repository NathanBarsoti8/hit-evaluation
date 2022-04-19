const express = require('express')
const router = express.Router()

router.get('/', require('../../src/services/players/list'))
router.post('/', require('../../src/services/players/create'))
router.put('/:id', require('../../src/services/players/update'))

module.exports = router
