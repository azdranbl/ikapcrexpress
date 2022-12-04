const db = require('../models')
const Profil = db.profils


exports.findAll = (req, res)=> {
    Profil.find()
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error"
        })
    });
}

exports.create = (req, res) => {
    const post = new Profil({
        visi: req.body.visi,
        misi: req.body.misi,
        sekapur_sirih: req.body.sekapur_sirih
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
    
    Profil.findById(id)
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

    Profil.findByIdAndUpdate(id, req.body)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "Profil ikapcr not found"
            })
        }
        res.send({
            message: "Profil ikapcr was updated"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    Profil.findByIdAndRemove(id)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "Profil ikapcr not found"
            })
        }
        res.send({
            message: "Profil ikapcr was delete"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}