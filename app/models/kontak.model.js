module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            nama: String,
            email: String,
            no_hp: String,
            pesan: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Kontak = mongoose.model("kontaks", schema)
    return Kontak
}