const db = require('../models')
const Berita = db.beritas

exports.findAll = (req, res)=> {
    Berita.find()
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error"
        })
    });
}

exports.create = (req, res) => {
    const post = new Berita({
        judul_berita: req.body.judul_berita,
        isi_berita: req.body.isi_berita,
        tanggal_posting: req.body.tanggal_posting,
        gambar: req.body.gambar,
        komentar: req.body.komentar,
        like: req.body.like
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
    
    Berita.findById(id)
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

    Berita.findByIdAndUpdate(id, req.body)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "Berita not found"
            })
        }
        res.send({
            message: "Berita was updated"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    Berita.findByIdAndRemove(id)
    .then((result)=>{
        if (!result){
            res.status(404).send({
                message: "Berita not found"
            })
        }
        res.send({
            message: "Berita was delete"
        })
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Some while error"
        })
    });
}