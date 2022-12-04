module.exports = (app) => {
    const kisahAlumnis = require('../controllers/kisahAlumni.controller')
    const router = require('express').Router()

    router.get('/', kisahAlumnis.findAll)
    router.post('/', kisahAlumnis.create)
    router.get('/:id', kisahAlumnis.findOne)
    router.put('/:id', kisahAlumnis.update)
    router.delete('/:id', kisahAlumnis.delete)
    
    app.use('/api/kisahAlumnis', router)
}