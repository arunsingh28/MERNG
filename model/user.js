const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdEvents: [
        {
            type: Schema.Types.ObjectId,
            // same name as other model name **exact name**
            ref: 'event'
        }
    ]
})

module.exports = model('user', userSchema)