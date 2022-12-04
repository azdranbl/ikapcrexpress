const db = require('../models')
const Admin = db.admins

exports.findAll = (req, res)=> {
    Admin.find()
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "data error"
        })
    });
}

exports.create = (req, res) => {
    const post = new Admin({
        nama: req.body.nama,
        alamat: req.body.alamat,
        jenis_kelamin: req.body.jenis_kelamin,
        no_hp: req.body.no_hp,
        email: req.body.email,
        password: req.body.password
    })

    post.save(post)
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "tambah data error"
        })
    });
}

exports.findOne = (req, res) =>{
    const id = req.params.id
    
    Admin.findById(id)
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "get data per id error"
        })
    });
}

exports.update = (req, res) =>{
    const id = req.params.id

    Admin.findByIdAndUpdate(id, req.body)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "Admin not found"
            })
        }
        res.send({
            message: "Admin was updated"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "update data error"
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    Admin.findByIdAndRemove(id)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "Admin not found"
            })
        }
        res.send({
            message: "Admin was delete"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}