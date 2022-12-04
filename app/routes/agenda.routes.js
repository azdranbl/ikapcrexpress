module.exports = (app) => {
    const agendas = require('../controllers/agenda.controller')
    const router = require('express').Router()

    router.get('/', agendas.findAll)
    router.post('/', agendas.create)
    router.get('/:id', agendas.findOne)
    router.put('/:id', agendas.update)
    router.delete('/:id', agendas.delete)
    
    app.use('/api/agendas', router)
}