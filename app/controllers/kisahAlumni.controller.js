const db = require('../models')
const kisahAlumni = db.kisahAlumnis


exports.findAll = (req, res)=> {
    kisahAlumni.find()
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error"
        })
    });
}

exports.create = (req, res) => {
    const post = new kisahAlumni({
        id_alumni: req.body.id_alumni,
        judul_kisah: req.body.judul_kisah,
        deskripsi_kisah: req.body.deskripsi_kisah,
        foto: req.body.foto,
        like: req.body.like,
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
    
    kisahAlumni.findById(id)
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

    kisahAlumni.findByIdAndUpdate(id, req.body)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "kisah alumni not found"
            })
        }
        res.send({
            message: "kisah alumni was updated"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    kisahAlumni.findByIdAndRemove(id)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "kisah alumni not found"
            })
        }
        res.send({
            message: "kisah alumni was delete"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}