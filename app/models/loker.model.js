module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            id_alumni: String,
            judul_lowongan: String,
            deskipsi: String,
            status: String,
            gambar: String,
            like: String,
            komentar: String,
            kategori: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Loker = mongoose.model("lokers", schema)
    return Loker
}