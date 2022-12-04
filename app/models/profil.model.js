module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            visi: String,
            misi: String,
            sekapur_sirih: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Profil = mongoose.model("profils", schema)
    return Profil
}