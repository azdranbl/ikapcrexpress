module.exports = (app) => {
    const lokers = require('../controllers/loker.controller')
    const router = require('express').Router()

    router.get('/', lokers.findAll)
    router.post('/', lokers.create)
    router.get('/:id', lokers.findOne)
    router.put('/:id', lokers.update)
    router.delete('/:id', lokers.delete)
    
    app.use('/api/lokers', router)
}