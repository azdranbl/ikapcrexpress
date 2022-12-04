module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            jurusan: String,
            prodi: String,
            generasi: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const alumniInfo = mongoose.model("alumniInfos", schema)
    return alumniInfo
}