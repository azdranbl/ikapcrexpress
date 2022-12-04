module.exports = (app) => {
    const alumniInfos = require('../controllers/alumniInfo.controller')
    const router = require('express').Router()

    router.get('/', alumniInfos.findAll)
    router.post('/', alumniInfos.create)
    router.get('/:id', alumniInfos.findOne)
    router.put('/:id', alumniInfos.update)
    router.delete('/:id', alumniInfos.delete)
    
    app.use('/api/alumniInfos', router)
}