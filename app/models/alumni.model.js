module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            nama: String,
            jenis_kelamin: String,
            agama: String,
            tempat_lahir: String,
            tanggal_lahir: Date,
            alamat: String,
            provinsi: String,
            kota: String,
            kecamatan: String,
            kelurahan: String,
            no_hp: String,
            email_alumni: String,
            username: String,
            password: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Alumni = mongoose.model("alumnis", schema)
    return Alumni
}