module.exports = (app) => {
    const admins = require('../controllers/admin.controller')
    const router = require('express').Router()

    router.get('/', admins.findAll)
    router.post('/', admins.create)
    router.get('/:id', admins.findOne)
    router.put('/:id', admins.update)
    router.delete('/:id', admins.delete)
    
    app.use('/api/admins', router)
}