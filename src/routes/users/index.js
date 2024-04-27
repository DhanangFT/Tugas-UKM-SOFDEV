const express = require('express')
const { createUser } = require('../../resolvers/users')

const router = express.Router()

router.post('/', createUser)
router.get('/',(reg, res) => {
    return res.send('Users Data')
})

module.exports = router