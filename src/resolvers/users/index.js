const knex = require('../..')
const {check, validationResult} = require('express-validator')

module.exports = {
    createUser: async (req, res) => {
        const { nrp, username } = req.body;
        console.log(req.body)
        await check('nrp').isString().notEmpty().isLength({ min: 10, max: 30 }).run(req)
        await check('username').isString().notEmpty().run(req)
        const result = validationResult(req)
        if (!result.isEmpty()) return res.status(400).json({errors: result.array() })
        const user = await knex ('users').insert({
        nrp, username
        }) 
        if (user.length == 0) return res.status(400).json({message: 'Gagal menambahkan data users'})
        return res.status(200).json({message: 'Berhasil menambahkan data users'})
    }
}