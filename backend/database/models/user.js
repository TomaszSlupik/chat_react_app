const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String, 
        required: true,
    },
    body: {
        type: String, 
        required: true,
    }
})

const User = mongoose.model('User', UserSchema)


module.exports = User