const dbConfig = require('../../config/db.config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose
db.url = dbConfig.url
db.organisasis = require('./organisasi.model')(mongoose)
db.alumnis = require('./alumni.model')(mongoose)
db.agendas = require('./agenda.model')(mongoose)
db.usahaAlumnis = require('./usahaAlumni.model')(mongoose)
db.alumniPekerjaans = require('./alumniPekerjaan.model')(mongoose)
db.alumniInfos = require('./alumniInfo.model')(mongoose)
db.kisahAlumnis = require('./kisahAlumni.model')(mongoose)
db.lokers = require('./loker.model')(mongoose)
db.kontaks = require('./kontak.model')(mongoose)
db.profils = require('./profil.model')(mongoose)
db.admins = require('./admin.model')(mongoose)
db.daftarAgendas = require('./daftarAgenda.model')(mongoose)
db.beritas = require('./berita.model')(mongoose)

module.exports = db