module.exports = (app) => {
    const daftarAgendas = require('../controllers/daftarAgenda.controller')
    const router = require('express').Router()

    router.get('/', daftarAgendas.findAll)
    router.post('/', daftarAgendas.create)
    router.get('/:id', daftarAgendas.findOne)
    router.put('/:id', daftarAgendas.update)
    router.delete('/:id', daftarAgendas.delete)
    
    app.use('/api/daftarAgendas', router)
}