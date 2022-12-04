const db = require('../models')
const alumniPekerjaan = db.alumniPekerjaans


exports.findAll = (req, res)=> {
    alumniPekerjaan.find()
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error"
        })
    });
}

exports.create = (req, res) => {
    const post = new alumniPekerjaan({
        status_pekerjaan: req.body.status_pekerjaan,
        nama_kantor: req.body.nama_kantor,
        alamat_kantor: req.body.alamat_kantor,
        provinsi_kantor: req.body.provinsi_kantor,
        kota_kantor: req.body.kota_kantor,
        divisi: req.body.divisi,
        bidang: req.body.bidang,
        jabatan: req.body.jabatan
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
    
    alumniPekerjaan.findById(id)
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

    alumniPekerjaan.findByIdAndUpdate(id, req.body)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "alumni pekerjaan not found"
            })
        }
        res.send({
            message: "alumni pekerjaan was updated"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    alumniPekerjaan.findByIdAndRemove(id)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "alumni pekerjaan not found"
            })
        }
        res.send({
            message: "alumni pekerjaan was delete"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}