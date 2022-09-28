const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    avatar:{type: String},
    comment_id:{type: ObjectId, ref:'Comments'}
})

module.exports = model('User', User)
