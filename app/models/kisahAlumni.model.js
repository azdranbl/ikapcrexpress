module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            id_alumni: String,
            judul_kisah: String,
            deskripsi_kisah: String,
            foto: String,
            like: String,
            status: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const kisahAlumni = mongoose.model("kisahAlumnis", schema)
    return kisahAlumni
}