const db = require('../models')
const daftarAgenda = db.daftarAgendas


exports.findAll = (req, res)=> {
    daftarAgenda.find()
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error"
        })
    });
}

exports.create = (req, res) => {
    const post = new daftarAgenda({
        id_admin: req.body.id_admin,
        id_agenda: req.body.id_agenda,
        id_berita: req.body.id_berita
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
    
    daftarAgenda.findById(id)
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

    daftarAgenda.findByIdAndUpdate(id, req.body)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "daftar agenda not found"
            })
        }
        res.send({
            message: "daftar agenda was updated"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    daftarAgenda.findByIdAndRemove(id)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "daftar agenda not found"
            })
        }
        res.send({
            message: "daftar agenda was delete"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}