module.exports = (app) => {
    const profils = require('../controllers/profil.controller')
    const router = require('express').Router()

    router.get('/', profils.findAll)
    router.post('/', profils.create)
    router.get('/:id', profils.findOne)
    router.put('/:id', profils.update)
    router.delete('/:id', profils.delete)
    
    app.use('/api/profils', router)
}