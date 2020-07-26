const {Schema, model, Types} = require('mongoose')

// create Schema User
const schema = new Schema({
   email: {type: String, required: true, unique: true },
   password: {type: String, required: true },
    links: [{ type: Types.ObjectId, ref: 'Link' }]

})

//export  Schema User
module.exports = model('User', schema)