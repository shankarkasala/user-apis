const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
},

)
const user = mongoose.model('user',userSchema)

module.exports = user
