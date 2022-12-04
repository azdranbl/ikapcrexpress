module.exports = (app) => {
    const organisasis = require('../controllers/organisasi.controller')
    const router = require('express').Router()

    router.get('/', organisasis.findAll)
    router.post('/', organisasis.create)
    router.get('/:id', organisasis.findOne)
    router.put('/:id', organisasis.update)
    router.delete('/:id', organisasis.delete)
    
    app.use('/api/organisasis', router)
}