const bcrypt = require('bcryptjs')
const _event = require('../model/event')
const _user = require('../model/user')

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
            date: new Date(arg.eventInput.date),
            creator: 'asdfa13adf21212sss1'
        })
        return event.save()
            .then(result => {
                
                return { ...result._doc }
            })
            .catch(err => console.log(err))
    },
    createUser: (arg) => {
        return _user.findOne({ email: arg.userInput.email })
            .then(user => {
                if (user) {
                    throw new Error("user already exists")
                }
                return bcrypt.hash(arg.userInput.password, 10)
            })
            .then(hashedPassword => {
                const user = new _user({
                    email: arg.userInput.email,
                    password: hashedPassword
                })
                return user.save()
                    .then(result => {
                        console.log(result)
                        return { ...result._doc, password: null }
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
}

