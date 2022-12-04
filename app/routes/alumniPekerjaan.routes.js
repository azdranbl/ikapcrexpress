module.exports = (app) => {
    const alumniPekerjaans = require('../controllers/alumniPekerjaan.controller')
    const router = require('express').Router()

    router.get('/', alumniPekerjaans.findAll)
    router.post('/', alumniPekerjaans.create)
    router.get('/:id', alumniPekerjaans.findOne)
    router.put('/:id', alumniPekerjaans.update)
    router.delete('/:id', alumniPekerjaans.delete)
    
    app.use('/api/alumniPekerjaans', router)
}