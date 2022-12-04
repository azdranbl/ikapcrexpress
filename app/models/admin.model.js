module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            nama: String,
            alamat: String,
            jenis_kelamin: String,
            no_hp: String,
            email: String,
            password: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Admin = mongoose.model("admins", schema)
    return Admin
}