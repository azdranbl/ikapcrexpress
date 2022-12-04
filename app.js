const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const db = require('./app/models/')
db.mongoose
    .connect(db.url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log(`Database connected succes`)
    }).catch((err)=>{
        console.log(`Database cannot connected!`, err)
        process.exit()
    });

app.get('/', (req, res)=>{
    res.json({
        message: "welcome"
    })
})

require('./app/routes/organisasi.routes')(app)
require('./app/routes/alumni.routes')(app)
require('./app/routes/agenda.routes')(app)
require('./app/routes/usahaAlumni.routes')(app)
require('./app/routes/alumniPekerjaan.routes')(app)
require('./app/routes/alumniInfo.routes')(app)
require('./app/routes/kisahAlumni.routes')(app)
require('./app/routes/loker.routes')(app)
require('./app/routes/kontak.routes')(app)
require('./app/routes/profil.routes')(app)
require('./app/routes/admin.routes')(app)
require('./app/routes/daftarAgenda.routes')(app)
require('./app/routes/berita.routes')(app)

const PORT = 8000
app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})