const { model, Schema } = require('mongoose')

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 3
    },
    description: {
        type: String,
        required: true,
        min: 3
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = model('event', eventSchema)