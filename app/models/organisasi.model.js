module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            nama_jabatan: String,
            kategori: String,
            departement: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Organisasi = mongoose.model("organisasis", schema)
    return Organisasi
}