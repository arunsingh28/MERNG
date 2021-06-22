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



    // creating events
    createEvent: async (arg) => {

    createEvent: (arg) => {

        const event = new _event({
            title: arg.eventInput.title,
            description: arg.eventInput.description,
            price: +arg.eventInput.price,
            date: new Date(arg.eventInput.date),
        try {
            const result = await event.save();
            createdEvent = {
                ...result._doc,
                _id: result._doc._id.toString(),
                date: new Date(event._doc.date).toISOString(),
                creator: user.bind(this, result._doc.creator)
            };
            creator.createdEvents.push(event);
            await creator.save();

            // const creator = await _user.findById('60b28ff90b2495528b6a4f24');

            // if (!creator) {
            //     throw new Error('User not found.');
            // }
            

            return createdEvent;
        } catch (err) {
            console.log(err);
            throw err;
        }
    },


    // creating user
    createUser: async (args) => {
        try {
            const existingUser = await _user.findOne({ email: args.userInput.email });
            if (existingUser) {
                throw new Error('User exists already.');
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

            const user = new _user({
                email: args.userInput.email,
                password: hashedPassword
            });

            const result = await user.save();

            return { ...result._doc, password: null, _id: result.id };
        } catch (err) {
            throw err;
        }
    },


}
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

