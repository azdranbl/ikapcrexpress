module.exports = (app) => {
    const kontaks = require('../controllers/kontak.controller')
    const router = require('express').Router()

    router.get('/', kontaks.findAll)
    router.post('/', kontaks.create)
    router.get('/:id', kontaks.findOne)
    router.put('/:id', kontaks.update)
    router.delete('/:id', kontaks.delete)
    
    app.use('/api/kontaks', router)
}