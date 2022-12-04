module.exports = (app) => {
    const beritas = require('../controllers/berita.controller')
    const router = require('express').Router()

    router.get('/', beritas.findAll)
    router.post('/', beritas.create)
    router.get('/:id', beritas.findOne)
    router.put('/:id', beritas.update)
    router.delete('/:id', beritas.delete)
    
    app.use('/api/beritas', router)
}