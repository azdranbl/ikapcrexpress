const db = require('../models')
const Agenda = db.agendas


exports.findAll = (req, res)=> {
    Agenda.find()
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error"
        })
    });
}

exports.create = (req, res) => {
    const post = new Agenda({
        nama_kegiatan: req.body.nama_kegiatan,
        tanggal: req.body.tanggal,
        waktu: req.body.waktu,
        deskripsi: req.body.deskripsi,
        komentar: req.body.komentar,
        like: req.body.like,
        departement: req.body.departement,
        foto: req.body.foto,
        tempat_kegiatan: req.body.tempat_kegiatan
    })

    post.save(post)
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}

exports.findOne = (req, res) =>{
    const id = req.params.id
    
    Agenda.findById(id)
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}

exports.update = (req, res) =>{
    const id = req.params.id

    Agenda.findByIdAndUpdate(id, req.body)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "Agenda not found"
            })
        }
        res.send({
            message: "Agenda was updated"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    Agenda.findByIdAndRemove(id)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "Agenda not found"
            })
        }
        res.send({
            message: "Agenda was delete"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}