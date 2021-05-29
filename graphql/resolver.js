
const _event = require('../model/event')

module.exports = {
    events: async () => {
        return _event.find()
            .then(event => {
                return event.map(e => {
                    return { ...e._doc }
                })
            }).catch(err => console.log(err))
    },
    createEvent: (arg) => {
        const event = new _event({
            title: arg.eventInput.title,
            description: arg.eventInput.description,
            price: +arg.eventInput.price,
            date: new Date(arg.eventInput.date)
        })
        return event.save()
            .then(result => {
                console.log(result)
                return { ...result._doc }
            })
            .catch(err => console.log(err))
    }
}