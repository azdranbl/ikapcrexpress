module.exports = (app) => {
    const alumnis = require('../controllers/alumni.controller')
    const router = require('express').Router()

    router.get('/', alumnis.findAll)
    router.post('/', alumnis.create)
    router.get('/:id', alumnis.findOne)
    router.put('/:id', alumnis.update)
    router.delete('/:id', alumnis.delete)
    
    app.use('/api/alumnis', router)
}