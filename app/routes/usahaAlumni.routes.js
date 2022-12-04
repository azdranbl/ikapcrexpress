module.exports = (app) => {
    const usahaAlumnis = require('../controllers/usahaAlumni.controller')
    const router = require('express').Router()

    router.get('/', usahaAlumnis.findAll)
    router.post('/', usahaAlumnis.create)
    router.get('/:id', usahaAlumnis.findOne)
    router.put('/:id', usahaAlumnis.update)
    router.delete('/:id', usahaAlumnis.delete)
    
    app.use('/api/usahaAlumnis', router)
}