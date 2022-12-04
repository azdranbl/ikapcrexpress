module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            nama_kegiatan: String,
            tanggal: Date,
            waktu: String,
            deskripsi: String,
            komentar: String,
            like: String,
            departement: String,
            foto: String,
            tempat_kegiatan: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Agenda = mongoose.model("agendas", schema)
    return Agenda
}