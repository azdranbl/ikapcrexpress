module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            status_pekerjaan: String,
            nama_kantor: String,
            alamat_kantor: String,
            provinsi_kantor: String,
            kota_kantor: String,
            divisi: String,
            bidang: String,
            jabatan: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const alumniPekerjaan = mongoose.model("alumniPekerjaans", schema)
    return alumniPekerjaan
}