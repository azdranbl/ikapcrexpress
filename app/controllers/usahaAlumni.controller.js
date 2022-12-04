const db = require('../models')
const usahaAlumni = db.usahaAlumnis


exports.findAll = (req, res)=> {
    usahaAlumni.find()
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error"
        })
    });
}

exports.create = (req, res) => {
    const post = new usahaAlumni({
        id_alumni: req.body.id_alumni,
        nama_usaha: req.body.nama_usaha,
        jenis_usaha: req.body.jenis_usaha,
        pemilik_usaha: req.body.pemilik_usaha,
        deskripsi_usaha: req.body.deskripsi_usaha,
        alamat_usaha: req.body.alamat_usaha,
        no_hp: req.body.no_hp,
        email: req.body.email,
        whatsapp: req.body.whatsapp,
        instagram: req.body.instagram,
        facebook: req.body.facebook,
        shope: req.body.shope,
        tokopedia: req.body.tokopedia,
        youtube: req.body.youtube,
        website: req.body.website,
        foto: req.body.foto,
        status: req.body.status
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
    
    usahaAlumni.findById(id)
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

    usahaAlumni.findByIdAndUpdate(id, req.body)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "Usaha Alumni not found"
            })
        }
        res.send({
            message: "Usaha Alumni was updated"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    usahaAlumni.findByIdAndRemove(id)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "Usaha Alumni not found"
            })
        }
        res.send({
            message: "Usaha Alumni was delete"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}