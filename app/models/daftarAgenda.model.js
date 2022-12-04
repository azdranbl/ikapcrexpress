module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            id_admin: String,
            id_agenda: String,
            id_berita: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const daftarAgenda = mongoose.model("daftarAgendas", schema)
    return daftarAgenda
}