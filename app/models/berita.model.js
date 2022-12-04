module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            judul_berita: String,
            isi_berita: String,
            tanggal_posting: String,
            gambar: String,
            komentar: String,
            like: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Berita = mongoose.model("beritas", schema)
    return Berita
}