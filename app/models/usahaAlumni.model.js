module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            id_alumni: String,
            nama_usaha: String,
            jenis_usaha: String,
            pemilik_usaha: String,
            deskripsi_usaha: String,
            alamat_usaha: String,
            no_hp: String,
            email: String,
            whatsapp: String,
            instagram: String,
            facebook: String,
            shope: String,
            tokopedia: String,
            youtube: String,
            website: String,
            foto: String,
            status: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const usahaAlumni = mongoose.model("usahaAlumnis", schema)
    return usahaAlumni
}